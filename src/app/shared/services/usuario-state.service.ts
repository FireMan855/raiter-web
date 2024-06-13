import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { UsuarioRaiterState } from '../store/usuario-raiter/UsuarioRaiterState.interface';
import { RaiterState } from '../store/load-panel/RaiterState.interface';
import { AgregarUsuarioAction, EliminarUsuarioAction } from '../store/usuario-raiter/usuario-raiter.actions';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStateService {
  readonly userKey = 'user';

  constructor(private readonly store : Store<RaiterState>) { }

  agregarUsuario(usuario : UsuarioRaiterState){
    this.store.dispatch(AgregarUsuarioAction({usuario}));
    localStorage.setItem(this.userKey, JSON.stringify(usuario));
  }
  eliminarUsuario(){
    this.store.dispatch(EliminarUsuarioAction());
    localStorage.removeItem(this.userKey);
  }
  static obtenerUsuarioActualLocalStorage() : UsuarioRaiterState | undefined{
    let userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage){
      try{
      return JSON.parse(userLocalStorage)
      }
      catch{
        return undefined
      }
    }
    return undefined
  }
}
