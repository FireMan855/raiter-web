import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoUnidadTransporteFormulario } from '../../models/tipo-unidad-transporte-formulario.interface';
import { RaiterException, TipoUnidadTransporteClient, TipoUnidadTransporteRegistrarPeticion } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { tap } from 'rxjs';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-tipos-unidad-transporte-editar',
  templateUrl: './tipos-unidad-transporte-editar.component.html',
  styleUrl: './tipos-unidad-transporte-editar.component.css'
})
export class TiposUnidadTransporteEditarComponent {
  private id: string = '';
  model?: TipoUnidadTransporteFormulario;
  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute,
    private readonly tipoUnidadClient: TipoUnidadTransporteClient, private readonly loadPanelService: LoadPanelService,
    private readonly notificacionService: NotificacionService
  ) {
    activatedRoute.params.pipe(
      tap(({ id }) => { this.id = id })
    ).subscribe(({ id }) => {
      tipoUnidadClient.obtenerTipoUnidadTransporte(id, ApiArea).subscribe({
        next: (response) => {
          this.model = response;
        },
        error: (err: RaiterException) => {
          let salida : Promise<void>;
          if (err.Mensaje)
            salida= this.notificacionService.warninig(err.Mensaje);
          else
            salida= this.notificacionService.warninig(err.Message);
          salida.then(() => {
            this.salir();
          })
        }
      });
    });
  }
  salir() {
    this.router.navigateByUrl('/TipoUnidadTransporte');
  }

  editarTipoUnidad(model: TipoUnidadTransporteFormulario) {
    this.loadPanelService.mostrarLoadPanel('Guardando cambios');
    this.tipoUnidadClient.editar({
      Id: this.id,
      ...model as TipoUnidadTransporteRegistrarPeticion
    }, ApiArea).subscribe(() => {
      this.notificacionService.success('Los cambios del tipo de unidad de transporte se han guardado correctamente');
    }).add(() => this.loadPanelService.ocultarLoadPanel());
  }
}
