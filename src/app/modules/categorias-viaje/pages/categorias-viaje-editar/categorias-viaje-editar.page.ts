import { Component } from '@angular/core';
import { CategoriaViajeClient, EditarCategoriaViajePeticion, ObtenerCategoriasViajePadreRespuesta, RaiterException, RegistrarCategoriaViajePeticion } from '../../../../shared/services/raiter-api-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-categorias-viaje-editar',
  templateUrl: './categorias-viaje-editar.page.html',
  styleUrl: './categorias-viaje-editar.page.css'
})
export class CategoriasViajeEditarPage {
  private categoriaViajeId: string = '';
  model?: ObtenerCategoriasViajePadreRespuesta
  categoriaViajePadreId? : string;
  nombreCategoriaViajePadre? : string;

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute,
    private readonly categoriaViajeClient: CategoriaViajeClient, private readonly loadPanelService: LoadPanelService,
    private readonly notificacionService: NotificacionService) {
    activatedRoute.params.subscribe(({ id }) => {
      this.categoriaViajeId = id;
      loadPanelService.mostrarLoadPanel('Obteniendo categoría de viaje');
      categoriaViajeClient.obtenerCategoriaPorId(id, ApiArea).subscribe({
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
      })
    });
    activatedRoute.queryParams.subscribe(({categoriaViajePadreId, nombreCategoriaViajePadre}) => {
      this.categoriaViajePadreId = categoriaViajePadreId;
      this.nombreCategoriaViajePadre = nombreCategoriaViajePadre;
    }); 
  }

  salir() {
    this.router.navigateByUrl('/CategoriaViaje')
  }

  editarCategoriaViaje(peticion: RegistrarCategoriaViajePeticion) {
    this.loadPanelService.mostrarLoadPanel('Guardando cambios');
    this.categoriaViajeClient.editarCategoria({ ...peticion, CategoriaViajeId: this.categoriaViajeId, CategoriaViajePadreId: this.categoriaViajePadreId }, ApiArea).subscribe(() => {
      this.notificacionService.success('Los cambios se han guardado correctamente').then(() => {
        this.salir();
      })
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    });
  }
}
