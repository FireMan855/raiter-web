import { Component } from '@angular/core';
import { RaiterException, RegistrarSustanciaPeligrosaPeticion, SustanciaPeligrosaClient, SustanciaPeligrosaRespuesta } from '../../../../shared/services/raiter-api-client.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-sustancias-peligrosas-editar',
  templateUrl: './sustancias-peligrosas-editar.page.html',
  styleUrl: './sustancias-peligrosas-editar.page.css'
})
export class SustanciasPeligrosasEditarPage {

  private sustanciaPeligrosaId: string = ''

  model?: SustanciaPeligrosaRespuesta;

  constructor(private readonly sustanciaPeligrosaClient: SustanciaPeligrosaClient,
    private readonly notificacionService: NotificacionService,
    private readonly loadPanelService: LoadPanelService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.pipe(
      tap(({ id }) => {
        this.sustanciaPeligrosaId = id;
        this.loadPanelService.mostrarLoadPanel('Obteniendo sustancia peligrosa');
      })
    ).subscribe(({ id }) => {
      this.sustanciaPeligrosaClient.obtenerSustanciaPeligrosaPorId(id, ApiArea).subscribe({
        next: (response) => {
          this.model = response;
        },
        error: (err: RaiterException) => {
          console.log(err)
          let salida : Promise<void>;
          if (err.Mensaje)
            salida= this.notificacionService.warninig(err.Mensaje);
          else
            salida= this.notificacionService.warninig(err.Message);
          salida.then(() => {
            this.salir();
          })
        }
      }).add(() => {
        this.loadPanelService.ocultarLoadPanel();
      })
    });
  }

  editarSustanciaPeligrosa(peticion: RegistrarSustanciaPeligrosaPeticion) {
    this.loadPanelService.mostrarLoadPanel('Guardando cambios');
    this.sustanciaPeligrosaClient.editarSustanciaPeligrosa({ ...peticion, SustanciaPeligrosaId: this.sustanciaPeligrosaId }, ApiArea).subscribe(() => {
      this.notificacionService.success("Los cambios se guardaron correctamente").then(() => {
        this.salir();
      });
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    });
  }
  salir() {
    this.router.navigateByUrl('/SustanciaPeligrosa');
  }

}
