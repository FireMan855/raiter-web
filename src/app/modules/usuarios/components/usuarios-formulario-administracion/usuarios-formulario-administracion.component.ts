import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { ObtenerUsuariosRespuesta } from '../../../../shared/services/raiter-api-client.service';

@Component({
  selector: 'app-usuarios-formulario-administracion',
  templateUrl: './usuarios-formulario-administracion.component.html',
  styleUrl: './usuarios-formulario-administracion.component.css'
})
export class UsuariosFormularioAdministracionComponent {
  model : ObtenerUsuariosRespuesta = this.generarModeloVacio();
  @Input() soloLectura = false;
  @Input() set modelEditar(input: ObtenerUsuariosRespuesta | undefined){
    if(input){
      this.model = { ... input};
    }
    else{
      this.model = this.generarModeloVacio();
    }
  }
  @Output() onSalir = new EventEmitter<void>();
  comboRolesOptions = {
    url: `${environment.baseUrl}Rol/ObtenerRoles`,

  }
  private generarModeloVacio() : ObtenerUsuariosRespuesta{
    return {
      EstaActivo: false,
      FechaRegistro: '',
      TieneConstanciaFiscal: false,
      Email: '',
      Id: '',
      Materno: '',
      Nombre: '',
      Paterno: '',
      PhoneNumber: '',
      Rol: '',
      Transportista: undefined,
      TransportistaId: '',
      UserName: ''
    } 
  }
}
