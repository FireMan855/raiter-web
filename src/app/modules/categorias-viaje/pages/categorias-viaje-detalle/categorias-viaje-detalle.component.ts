import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaViajeClient, ObtenerCategoriasViajePadreRespuesta, RaiterException } from '../../../../shared/services/raiter-api-client.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-categorias-viaje-detalle',
  templateUrl: './categorias-viaje-detalle.component.html',
  styleUrl: './categorias-viaje-detalle.component.css'
})
export class CategoriasViajeDetalleComponent {

  model? : ObtenerCategoriasViajePadreRespuesta;
  nombreCategoriaViajePadre? : string;

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute, 
    private readonly categoriaViajeClient :CategoriaViajeClient, private readonly loadPanelService : LoadPanelService, 
    private readonly notificacionService : NotificacionService){
    activatedRoute.params.subscribe(({id}) => {
      loadPanelService.mostrarLoadPanel('Obteniendo categoría de viaje');
      categoriaViajeClient.obtenerCategoriaPorId(id,ApiArea).subscribe({
        next:(response) => {
          this.model = response;
        },
        error:(err : RaiterException) => {
          let salida : Promise<void>;
          if (err.Mensaje)
            salida= this.notificacionService.warninig(err.Mensaje);
          else
            salida= this.notificacionService.warninig(err.Message ?? (<any>err).message);
          salida.then(() => {
            this.salir();
          })
        }
      }).add(() => {
        loadPanelService.ocultarLoadPanel();
      });
      activatedRoute.queryParams.subscribe(({nombreCategoriaViajePadre}) => {
        this.nombreCategoriaViajePadre = nombreCategoriaViajePadre;
      }); 
    })
  }

  salir(){
    this.router.navigateByUrl('/CategoriaViaje')
  }

}
