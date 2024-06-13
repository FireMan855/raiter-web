import { UsuarioRaiterState } from "../usuario-raiter/UsuarioRaiterState.interface"

export interface RaiterState{
    usuario?: UsuarioRaiterState
    loadPanelGeneral: LoadPanelGeneralState
}
export interface LoadPanelGeneralState{
    visible : boolean,
    mensaje : string
}