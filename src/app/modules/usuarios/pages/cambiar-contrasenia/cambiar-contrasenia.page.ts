import { Component } from '@angular/core';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { Router } from '@angular/router';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { CambiarPasswordPeticion, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { CambiarContraseniaFields } from '../../models/cambiar-contrasenia-fields.interface';
import { contraseniaRegex } from '../../../../shared/utils/regex-constants';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.page.html',
  styleUrl: './cambiar-contrasenia.page.css'
})
export class CambiarContraseniaPage {
  
  model : CambiarPasswordPeticion = {
    ContraseniaActual: '',
    ContraseniaNueva: ''
  }
  fields : CambiarContraseniaFields = {
    txtContraseniaActualMode: 'password',
    txtContraseniaNuevaMode: 'password',
    txtRepetirContraseniaMode: 'password',
    txtContraseniaActualClick : () => {
      this.fields.txtContraseniaActualMode = this.fields.txtContraseniaActualMode === 'text' ? 'password' : 'text';
    },
    txtContraseniaNuevaClick: () => {
      this.fields.txtContraseniaNuevaMode = this.fields.txtContraseniaNuevaMode === 'text' ? 'password' : 'text';
    },
    txtRepetirContraseniaClick: () => {
      this.fields.txtRepetirContraseniaMode = this.fields.txtRepetirContraseniaMode === 'text' ? 'password' : 'text';
    }
  }
  readonly vgCambiarContrasenia = 'vgCambiarContrasenia';
  readonly contraseniaRegexp = contraseniaRegex;
  compararContrasenia = () => this.model.ContraseniaNueva;
  constructor(private readonly router: Router, private readonly notificacionService: NotificacionService,
    private readonly loadPanelService : LoadPanelService, private readonly usuarioClient : UsuarioClient
  ){
    
  }

  salir(){
    this.notificacionService.mostrarConfirmacionSalida().then(response => {
      if(response){
        this.router.navigateByUrl('/Usuarios/MiCuenta');
      }
    })
  }
  guardar(){
    if(!validationEngine.validateGroup(this.vgCambiarContrasenia).isValid){
      return
    }
    this.loadPanelService.mostrarLoadPanel('Guardando cambios');
    this.usuarioClient.cambiarMiPassword(this.model,ApiArea).subscribe(() => {
      this.notificacionService.success('Su contraseña ha sido actualizada correctamente').then(() => {
        this.router.navigateByUrl('/Usuarios/MiCuenta');
      })
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    })
  }

}
