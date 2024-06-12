import { createReducer, on } from "@ngrx/store";
import { mostrarLoadPanelGeneralAction, ocultarLoadPanelGeneralAction } from "./load-panel.actions";
import { LoadPanelGeneralState } from "./RaiterState.interface";

export const loadPanelReducer = createReducer<LoadPanelGeneralState>({ visible : false, mensaje: 'Cargando'}, 
    on(mostrarLoadPanelGeneralAction, (state, {mensaje}) => ({ ...state, visible: true, mensaje })),    
    on(ocultarLoadPanelGeneralAction, (state) => ({ ...state, visible: false}))
);