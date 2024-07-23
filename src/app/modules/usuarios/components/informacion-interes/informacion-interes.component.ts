import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerUsuariosTrasnportisaRespuesta } from '../../../../shared/services/raiter-api-client.service';

@Component({
  selector: 'app-informacion-interes',
  templateUrl: './informacion-interes.component.html',
  styleUrl: './informacion-interes.component.css'
})
export class InformacionInteresComponent {

  @Input() transportista? : ObtenerUsuariosTrasnportisaRespuesta

  constructor(private readonly router : Router){}

  verTerminosYCondiciones(){
    window.open('/assets/Archivos/TERMINOS_Y_CONDICIONES_RAITER.pdf', '_blank')
  }
  verPoliticasDeUso(){
    window.open('/assets/Archivos/POLITICA_DE_USO_RAITER.pdf', '_blank');
  }
  verAvisoDePrivacidad(){
    window.open('/assets/Archivos/AVISO_DE_PRIVACIDAD_RAITER.pdf', '_blank')
  }
  verPoliticaDeDevoluciones(){
    this.router.navigateByUrl('/PoliticaDevoluciones');
  }
}
