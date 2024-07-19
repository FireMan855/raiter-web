import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaViajeClient, RegistrarCategoriaViajePeticion } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-categorias-viaje-registrar',
  templateUrl: './categorias-viaje-registrar.page.html',
  styleUrl: './categorias-viaje-registrar.page.css'
})
export class CategoriasViajeRegistrarPage {
  categoriaViajePadreId? : string;
  nombreCategoriaViajePadre? : string;
  constructor(private readonly router: Router, private readonly categoriaViajeClient : CategoriaViajeClient,
    private readonly loadPanelService : LoadPanelService, private readonly notificacionService : NotificacionService,
    private readonly activatedRoute: ActivatedRoute
  ){
    activatedRoute.queryParams.subscribe(({categoriaViajePadreId, nombreCategoriaViajePadre}) => {
      this.categoriaViajePadreId = categoriaViajePadreId;
      this.nombreCategoriaViajePadre = nombreCategoriaViajePadre;
    }); 
  }
  salir(){
    this.router.navigateByUrl('/CategoriaViaje');
  }
  registrarCategoriaViaje(model: RegistrarCategoriaViajePeticion){
    this.loadPanelService.mostrarLoadPanel('Registrando categoría de viaje')
    this.categoriaViajeClient.registrarCategoria({...model, CategoriaViajePadreId: this.categoriaViajePadreId}, ApiArea).subscribe(() => {
      this.notificacionService.success(this.categoriaViajePadreId ? "La subcategoría de viaje se ha registrado exitosamente" 
        : "La categoría de viaje se ha registrado exitosamente").then(() => {
        this.salir();
      })
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    })
  }
}
