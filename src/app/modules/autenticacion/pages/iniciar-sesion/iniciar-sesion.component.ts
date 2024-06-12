import { Component, ViewChild } from '@angular/core';
import { InicioSesionPeticion, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import validationEngine from 'devextreme/ui/validation_engine';
import { DxTextBoxComponent, DxValidatorComponent } from 'devextreme-angular';
import { EnterKeyEvent } from 'devextreme/ui/text_box';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
  //standalone: true,
  //imports: [DxButtonModule, DxTextBoxModule]
})
export class IniciarSesionComponent {
  /**
   * E-mail y contraseña ingresados por el usuario para el inicio de sesión
   */
  model: InicioSesionPeticion = {
    Email: '',
    Contrasenia: ''
  }
  /**
   * Modo del input de contraseña
   */
  txtContraseniaMode: 'password' | 'text' = 'password';
  /**
   * Referencia al input de e-mail
   */
  @ViewChild('txtEmail') private readonly txtEmail!: DxTextBoxComponent;
  /**
   * Referencia al input de contraseña
   */
  @ViewChild('txtContrasenia') private readonly txtContrasenia!: DxTextBoxComponent
  /**
   * Referencia al botón de inicio de sesión
   */
  @ViewChild('btnIniciarSesion') private readonly btnIniciarSesion!: DxTextBoxComponent
  constructor(private readonly usuarioClient: UsuarioClient, private readonly loadPanelService: LoadPanelService,
    private readonly router : Router
  ) { }
  /**
   * Nombre del grupo DevExtreme a validar para iniciar sesión
   */
  readonly vgIniciarSesion = 'vgIniciarSesion';
  /**
   * Método que solicita un token para iniciar sesión en Raiter con el e-mail y contraseña introducidos
   * @returns 
   */
  iniciarSesion() {
    if (!validationEngine.validateGroup(this.vgIniciarSesion).isValid) {
      return
    }
    this.loadPanelService.mostrarLoadPanel("Iniciando sesión");
    this.usuarioClient.obtenerToken(this.model, ApiArea).subscribe(e => {
      this.router.navigateByUrl('/Inicio')
    }).add(() => this.loadPanelService.ocultarLoadPanel());
  }
  /**
   * Permite mostrar u ocultar la contraseña ingresada
   */
  cambiarModoContrasenia = () => {
    this.txtContraseniaMode = this.txtContraseniaMode === 'password' ? 'text' : 'password';
  }
  /**
   * Hace focus al campo de contraseña al dar enter al campo de e-mail
   */
  onTxtEmailEnterKey() {
    if (this.txtEmail.isValid) {
      this.txtContrasenia.instance.focus();
    }
  }
  /**
   * Hace focus al inicio de sesión al dar enter al campo de contraseña
   */
  onTxtContraseniaEnterKey() {
    if (this.txtContrasenia.isValid) {
      this.btnIniciarSesion.instance.focus();
    }
  }
}
