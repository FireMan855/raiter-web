import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import validationEngine from 'devextreme/ui/validation_engine';
import { RegistroUsuarioWebPeticion, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { Observable, interval, map, takeWhile } from 'rxjs';
import { contraseniaRegex } from '../../../../shared/utils/regex-constants';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  constructor(private readonly router : Router, private readonly notificacionService : NotificacionService,
    private readonly usuarioClient : UsuarioClient, private readonly loadPanelService : LoadPanelService
  ){}

  model : RegistroUsuarioWebPeticion = {
    Nombre : '',
    Paterno: '',
    Materno: '',
    Email: '',
    NumeroTelefono: '',
    Contrasenia: '',
    RepetirContrasenia: ''
  }
  /**
   * Grupo de validación DevExtreme
   */
  readonly vgRegistrarUsuario = 'vgRegistrarUsuario';
  /**
   * Grupo de validación de los checkboxes de aceptación
   */
  readonly vgCheckBoxes = 'vgCheckBoxes';
  /**
   * Modo del campo de contraseña
   */
  txtContraseniaMode: 'password' | 'text' = 'password';
  /**
   * Modo del campo de repetición de contraseña
   */
  txtRepetirContraseniaMode: 'password' | 'text' = 'password';
  /**
   * Indica si el registro fue exitoso para mostrar el aviso de e-mail enviado
   */
  registroExitoso : boolean = false;
  /**
   * Indica si el enlace de confirmación ha sido reenviado al menos una vez
   */
  enlaceReenviado: boolean = false;
  compararContrasenia = () => this.model.Contrasenia;
  readonly contraseniaRegexp = contraseniaRegex;
  cronometro? : string;
  /**
   * Regresa a la pantalla de login
   */
  volverALogin(){
    this.notificacionService.mostrarConfirmacionSalida()
    .then(response => {
      if(response){
        this.router.navigateByUrl('Usuario/IniciarSesion');
      }
    })
  }
  /**
   * Confirma el registro de un usuario con los datos ingresados
   * @returns 
   */
  registrarUsuario(){
    if(!validationEngine.validateGroup(this.vgRegistrarUsuario).isValid){
      return
    }
    if(!validationEngine.validateGroup(this.vgCheckBoxes).isValid){
      this.notificacionService.mostrarWarningToast("Debe aceptar los términos y condiciones, la política de uso y el aviso de privacidad");
      return
    }
    this.loadPanelService.mostrarLoadPanel();
    this.usuarioClient.registrarUsuarioWeb(this.model, ApiArea).subscribe(id => {
      if(id){
        this.registroExitoso = true;
      }
    }).add(() => this.loadPanelService.ocultarLoadPanel());
  }
  /**
   * Reenvía el enlace de confirmación de e-mail
   */
  reenviarEnlace(){
    this.loadPanelService.mostrarLoadPanel('Reenviando enlace');
    this.usuarioClient.reenviarConfirmacionEmail(this.model.Email, ApiArea).subscribe(() => {
      this.iniciarCronometro();
    }).add(() => { this.loadPanelService.ocultarLoadPanel()});
  }
  /**
   * Envía al usuario a la pantalla de inicio de sesión
   */
  iniciarSesion(){
    this.router.navigateByUrl("/Usuario/IniciarSesion");
  }
  /**
   * Bloquea por tres minutos el botón de reenvío de enlace
   */
  iniciarCronometro(){
    interval(1000).pipe(
      map(value => 180 - value), // Subtract 1 to start from 179 instead of 180
      takeWhile(value => value >= 0),
      map(time => this.formatTime(time))
    ).subscribe(s => this.cronometro = s)
    .add(() => this.cronometro = undefined)
  }
  formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number) {
    return (num < 10 ? '0' : '') + num;
  }
  cambiarModoContrasenia = () => {
    this.txtContraseniaMode = this.txtContraseniaMode === 'password' ? 'text' : 'password';
  }
  cambiarModoRepetirContrasenia = () => {
    this.txtRepetirContraseniaMode = this.txtRepetirContraseniaMode === 'password' ? 'text' : 'password';
  }
}
