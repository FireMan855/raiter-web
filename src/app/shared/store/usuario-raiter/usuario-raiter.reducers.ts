import { inject } from "@angular/core";
import { createReducer, on } from "@ngrx/store";
import { UsuarioStateService } from "../../services/usuario-state.service";
import { AgregarUsuarioAction, EliminarUsuarioAction } from "./usuario-raiter.actions";

export const usuarioReducer = createReducer(obtenerUsuarioActual(),
    on(AgregarUsuarioAction, (state, { usuario }) => ({ ...state, ...usuario })),
    on(EliminarUsuarioAction, (state) => undefined)
)

function obtenerUsuarioActual() {
    return UsuarioStateService.obtenerUsuarioActualLocalStorage();
}
