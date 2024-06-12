import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfirmarEmailRespuesta, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrl: './confirmar-email.page.css'
})
export class ConfirmarEmailPage {

  /**
   * Token a enviar obtenido de la URL
   */
  private token : string = '';
  /**
   * Email a enviar obtenido de la URL
   */
  private email: string = '';
  /**
   * Respuesta de confirmación de e-mail
   */
  respuesta? : ConfirmarEmailRespuesta

  constructor(private readonly activatedRoute : ActivatedRoute, private readonly usuarioClient: UsuarioClient,
    private readonly loadPanelService : LoadPanelService, private readonly router: Router
  ){
    activatedRoute.queryParams.subscribe(({token, email}) => {
      this.token = token;
      this.email = email;
      this.loadPanelService.mostrarLoadPanel('Confirmando e-mail')
      this.usuarioClient.confirmarEmail(token, email, ApiArea).subscribe(response => {
        this.respuesta = response;
      }).add(() => {
        this.loadPanelService.ocultarLoadPanel();
      });
    })
  }
  /**
   * Envía a la pantalla de inicio de sesión
   */
  iniciarSesion(){
    this.router.navigateByUrl('/Usuario/IniciarSesion');
  }

}
