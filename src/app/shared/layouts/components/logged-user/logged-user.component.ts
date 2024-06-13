import { Component, Input } from '@angular/core';
import { UsuarioStateService } from '../../../services/usuario-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrl: './logged-user.component.css'
})
export class LoggedUserComponent {
  @Input() nombreUsuario? : string;

  constructor(private readonly usuarioStateService: UsuarioStateService,
    private readonly router : Router
  ) {}

  cerrarSesion(){
    this.usuarioStateService.eliminarUsuario();
    this.router.navigateByUrl('/Usuario/IniciarSesion');
  }
}
