import { createSelector } from "@ngrx/store";
import { RaiterState } from "../load-panel/RaiterState.interface";


const raiterStateSelector = (state : RaiterState) => state
export const usuarioRaiterSelector = createSelector(
    raiterStateSelector,
    r => r.usuario
)
export const usuarioRaiterIdSelector = createSelector(
    raiterStateSelector,
    r => r.usuario?.Id
)