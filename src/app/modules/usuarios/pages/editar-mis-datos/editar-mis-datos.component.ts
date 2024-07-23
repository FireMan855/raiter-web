import { Component } from '@angular/core';
import { Router } from '@angular/router';
import validationEngine from 'devextreme/ui/validation_engine';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { ObtenerMisDatosRespuesta, RaiterException, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';

@Component({
  selector: 'app-editar-mis-datos',
  templateUrl: './editar-mis-datos.component.html',
  styleUrl: './editar-mis-datos.component.css'
})
export class EditarMisDatosComponent {
  model : ObtenerMisDatosRespuesta = {}
  readonly vgEditarMisDatos = 'vgEditarMisDatos';
  constructor(private readonly router: Router, private readonly notificacionService : NotificacionService,
    private readonly usuarioClient : UsuarioClient, private readonly loadPanelService: LoadPanelService
  ){
    loadPanelService.mostrarLoadPanel('Obteniendo sus datos');
    usuarioClient.obtenerMisDatos(ApiArea).subscribe({
      next: (response) =>{
        this.model = response;
      },
      error: (err : RaiterException) =>{
        let salida : Promise<void>;
        if (err.Mensaje)
          salida= this.notificacionService.warninig(err.Mensaje);
        else
          salida= this.notificacionService.warninig(err.Message ?? (<any>err).message);
        salida.then(() => {
          this.router.navigateByUrl('/Usuarios/MiCuenta');
        })
      }
    }).add(() => {
      loadPanelService.ocultarLoadPanel();
    })
  }

  salir(){
    this.notificacionService.mostrarConfirmacionSalida().then(response => {
      if(response){
        this.router.navigateByUrl('/Usuarios/MiCuenta');
      }
    })
  }
  guardar(){
    if(!validationEngine.validateGroup(this.vgEditarMisDatos).isValid){
      return
    }
    this.loadPanelService.mostrarLoadPanel('Guardando cambios');
    this.usuarioClient.editarMisDatos(this.model, ApiArea).subscribe(() => {
      this.notificacionService.success('Los cambios se han guardado correctamente').then(response => {
        if(response){
          this.router.navigateByUrl('/Usuarios/MiCuenta');
        }
      });
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    });
  }
}
