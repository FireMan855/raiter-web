import { Component } from '@angular/core';
import { ObtenerUsuariosRespuesta, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.page.html',
  styleUrl: './detalles-usuario.page.css'
})
export class DetallesUsuarioPage {
  model? : ObtenerUsuariosRespuesta

  constructor(private readonly usuarioClient : UsuarioClient, private readonly activatedRoute : ActivatedRoute,
    private readonly router: Router
  ){
    activatedRoute.params.subscribe(({id}) => {
      usuarioClient.obtenerUsuario(id, ApiArea).subscribe((response) => {
        this.model = response;
      });
    });
  }
  salir(){
    this.router.navigateByUrl('/Usuarios');
  }

}
