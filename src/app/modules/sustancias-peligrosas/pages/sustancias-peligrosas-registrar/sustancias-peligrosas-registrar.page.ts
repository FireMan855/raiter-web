import { Component } from '@angular/core';
import { RegistrarSustanciaPeligrosaPeticion, SustanciaPeligrosaClient } from '../../../../shared/services/raiter-api-client.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { Router } from '@angular/router';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-sustancias-peligrosas-registrar',
  templateUrl: './sustancias-peligrosas-registrar.page.html',
  styleUrl: './sustancias-peligrosas-registrar.page.css'
})
export class SustanciasPeligrosasRegistrarPage {

  constructor(private readonly sustanciaPeligrosaClient: SustanciaPeligrosaClient,
    private readonly notificacionService: NotificacionService,
    private readonly loadPanelService: LoadPanelService,
    private readonly router: Router
  ){}

  registrarSustanciaPeligrosa(peticion: RegistrarSustanciaPeligrosaPeticion){
    this.loadPanelService.mostrarLoadPanel('Registrando sustancia peligrosa');
    this.sustanciaPeligrosaClient.registrarSustanciaPeligrosa(peticion, ApiArea).subscribe(() => {
      this.notificacionService.success("La sustancia peligrosa se guardó correctamente").then(() => {
        this.salir();
      });
    }).add(() => {
      this.loadPanelService.ocultarLoadPanel();
    }); 
  }
  salir(){
    this.router.navigateByUrl('/SustanciaPeligrosa');
  }
}
