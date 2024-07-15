import { Component } from '@angular/core';
import { RaiterException, SustanciaPeligrosaClient, SustanciaPeligrosaRespuesta } from '../../../../shared/services/raiter-api-client.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-sustancias-peligrosas-detalles',
  templateUrl: './sustancias-peligrosas-detalles.page.html',
  styleUrl: './sustancias-peligrosas-detalles.page.css'
})
export class SustanciasPeligrosasDetallesPage {

  model?: SustanciaPeligrosaRespuesta;
  
  constructor(private readonly sustanciaPeligrosaClient: SustanciaPeligrosaClient,
    private readonly notificacionService: NotificacionService,
    private readonly loadPanelService: LoadPanelService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.pipe(
      /*tap(({ id }) => {
        this.loadPanelService.mostrarLoadPanel('Obteniendo sustancia peligrosa');
      })*/
    ).subscribe(({ id }) => {
      this.sustanciaPeligrosaClient.obtenerSustanciaPeligrosaPorId(id, ApiArea).subscribe({
        next: (response) => {
          this.model = response;
        },
        error: (err: RaiterException) => {
          let salida : Promise<void>;
          if (err.Mensaje)
            salida= this.notificacionService.warninig(err.Mensaje);
          else
            salida= this.notificacionService.warninig(err.Message ?? (<any>err).message);
          salida.then(() => {
            this.salir();
          })
        }
      });
    });
  }

  salir() {
    this.router.navigateByUrl('/SustanciaPeligrosa');
  }

}
