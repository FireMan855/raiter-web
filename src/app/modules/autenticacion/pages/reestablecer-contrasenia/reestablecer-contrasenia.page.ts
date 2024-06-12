import { Component } from '@angular/core';
import { contraseniaRegex } from '../../../../shared/utils/regex-constants';
import { RestablecerContraseniaPeticion, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import validationEngine from 'devextreme/ui/validation_engine';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-reestablecer-contrasenia',
  templateUrl: './reestablecer-contrasenia.page.html',
  styleUrl: './reestablecer-contrasenia.page.css'
})
export class ReestablecerContraseniaPage {
  model : RestablecerContraseniaPeticion = {
    UsuarioId: '',
    Token: '',
    NuevaContrasenia: '',
    RepetirContrasenia : ''
  }
  txtContraseniaMode: 'password' | 'text' = 'password';
  txtRepetirContraseniaMode :'password' | 'text' = 'password';
  readonly vgRestablecerContrasenia = 'vgRestablecerContrasenia';
  readonly contraseniaRegexp = contraseniaRegex
  restablecimientoExitoso : boolean = false;
  constructor(private readonly router: Router, private readonly activatedRoute : ActivatedRoute,
    private readonly loadPanelService : LoadPanelService, private readonly notificacionService : NotificacionService,
    private readonly usuarioClient: UsuarioClient
  ){
    activatedRoute.queryParams.subscribe(({token, usuarioId}) => {
      this.model.Token = token?.replaceAll(' ', '+');
      this.model.UsuarioId = usuarioId;
    })
  }
  compararContrasenia = () => this.model.NuevaContrasenia;
  cambiarModoContrasenia = () => {
    this.txtContraseniaMode = this.txtContraseniaMode === 'password' ? 'text' : 'password';
  }
  cambiarModoRepetirContrasenia = () => {
    this.txtRepetirContraseniaMode = this.txtRepetirContraseniaMode === 'password' ? 'text' : 'password';
  }
  restablecerContrasenia(){
    if(!validationEngine.validateGroup(this.vgRestablecerContrasenia).isValid){
      return
    }
    this.loadPanelService.mostrarLoadPanel('Guardando contraseña');
    this.usuarioClient.restablecerContraseniaConfirmacion(this.model, ApiArea).subscribe(() => {
      this.restablecimientoExitoso = true;
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    })
  }
  iniciarSesion(){
    this.router.navigateByUrl('/Usuario/IniciarSesion');
  }
}
