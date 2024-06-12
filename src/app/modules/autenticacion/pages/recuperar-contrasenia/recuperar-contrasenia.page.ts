import { Component } from '@angular/core';
import { Router } from '@angular/router';
import validationEngine from 'devextreme/ui/validation_engine';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.page.html',
  styleUrl: './recuperar-contrasenia.page.css'
})
export class RecuperarContraseniaPage {
  email: string = '';
  formularioEnviado : boolean = false;
  readonly vgRecuperarContrasenia = 'vgRecuperarContrasenia';

  constructor(private readonly router: Router, private readonly loadPanelService :LoadPanelService,
    private readonly usuarioClient : UsuarioClient
  ){}
  /**
   * Redirige a la página de inicio de sesión
   */
  iniciarSesion(){
    this.router.navigateByUrl('/Usuario/IniciarSesion');
  }
  /**
   * Envía un enlace al e-mail ingresado para reestablecer la contraseña
   * @returns 
   */
  enviarEnlace(){
    if(!validationEngine.validateGroup(this.vgRecuperarContrasenia).isValid){
      return
    }
    this.loadPanelService.mostrarLoadPanel();
    this.usuarioClient.enviarTokenRecuperacionContrasenia(this.email, ApiArea).subscribe(() => {
      this.formularioEnviado = true;
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    })
  }
}
