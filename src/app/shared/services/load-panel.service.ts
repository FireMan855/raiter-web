import { Injectable } from '@angular/core';
import { RaiterState } from '../store/load-panel/RaiterState.interface';
import { Store } from '@ngrx/store';
import { mostrarLoadPanelGeneralAction, ocultarLoadPanelGeneralAction } from '../store/load-panel/load-panel.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadPanelService {
  private _activo : boolean = false;
  private _mensaje : string = 'Cargando'
  get activo(){
    return this._activo
  }
  get mensaje(){
    return this._mensaje;
  }
  constructor(private readonly store : Store<RaiterState>) { }
  mostrarLoadPanel(mensaje : string = 'Cargando'){
    this.store.dispatch(mostrarLoadPanelGeneralAction({ mensaje}));
  }
  ocultarLoadPanel(){
    this.store.dispatch(ocultarLoadPanelGeneralAction());
  }
}
