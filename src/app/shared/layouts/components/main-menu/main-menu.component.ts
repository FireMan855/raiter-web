import { Component, Input, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { RaiterState } from '../../../store/load-panel/RaiterState.interface';
import { usuarioRaiterSelector } from '../../../store/usuario-raiter/usuario-raiter.selectors';
import { UsuarioRaiterState } from '../../../store/usuario-raiter/UsuarioRaiterState.interface';
import { RolesStrings } from '../../../store/usuario-raiter/roles-strings';
import { EstadoAprobacionTransportista } from '../../../services/raiter-api-client.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {
  @Input() nombreUsuario? : string = 'Invitado';
  usuarioRaiter? : UsuarioRaiterState
  menuDerechoAbierto: boolean = false;
  readonly usuarioRolRef  = RolesStrings.Usuario;
  readonly administradorRolRef = RolesStrings.Administrador;
  readonly choferRolRef = RolesStrings.Chofer;
  readonly transportistaAprobadoRef = EstadoAprobacionTransportista.Aprobado;
  constructor(private readonly store : Store<RaiterState>){}
  ngOnInit(): void {
    this.store.select(usuarioRaiterSelector).subscribe(user => {
      this.usuarioRaiter = user;
    })  
  }

  
}
