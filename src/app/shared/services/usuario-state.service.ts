import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { UsuarioRaiterState } from '../store/usuario-raiter/UsuarioRaiterState.interface';
import { RaiterState } from '../store/load-panel/RaiterState.interface';
import { AgregarUsuarioAction, EliminarUsuarioAction } from '../store/usuario-raiter/usuario-raiter.actions';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStateService {
  static readonly userKey = 'user';

  constructor(private readonly store : Store<RaiterState>) { }

  agregarUsuario(usuario : UsuarioRaiterState){
    this.store.dispatch(AgregarUsuarioAction({usuario}));
    localStorage.setItem(UsuarioStateService.userKey, JSON.stringify(usuario));
  }
  eliminarUsuario(){
    this.store.dispatch(EliminarUsuarioAction());
    localStorage.removeItem(UsuarioStateService.userKey);
  }
  obtenerUsuarioActualLocalStorage() : UsuarioRaiterState | undefined{
    let userLocalStorage = localStorage.getItem(UsuarioStateService.userKey);
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
  static obtenerUsuarioActualLocalStorage() : UsuarioRaiterState | undefined{
    let userLocalStorage = localStorage.getItem(UsuarioStateService.userKey);
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
