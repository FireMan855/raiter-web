import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUnidadTransporteFormulario } from '../../models/tipo-unidad-transporte-formulario.interface';
import { TipoUnidadTransporteClient, TipoUnidadTransporteRegistrarPeticion } from '../../../../shared/services/raiter-api-client.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-tipos-unidad-transporte-registrar',
  templateUrl: './tipos-unidad-transporte-registrar.component.html',
  styleUrl: './tipos-unidad-transporte-registrar.component.css'
})
export class TiposUnidadTransporteRegistrarComponent {
  constructor(private readonly router : Router, private readonly tipoUnidadClient : TipoUnidadTransporteClient,
    private readonly loadPanelService : LoadPanelService, private readonly notificacionService : NotificacionService
  ){}
  salir(){
    this.router.navigateByUrl('/TipoUnidadTransporte');
  }
  registrarTipoUnidad(model: TipoUnidadTransporteFormulario){
    this.loadPanelService.mostrarLoadPanel('Registrando tipo de unidad de transporte');
    this.tipoUnidadClient.registrar(model as TipoUnidadTransporteRegistrarPeticion, ApiArea).subscribe(() => {
      this.notificacionService.success('Se ha registrado correctamente el nuevo tipo de unidad de transporte').then(response => {
        this.salir();
      })
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    });
  }
}
