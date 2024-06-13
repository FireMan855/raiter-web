import { createAction, props } from "@ngrx/store";
import { UsuarioRaiterState } from "./UsuarioRaiterState.interface";

export const AgregarUsuarioAction = createAction("AGREGAR_USUARIO_RAITER", props<{usuario : UsuarioRaiterState}>());
export const EliminarUsuarioAction = createAction("ELIMINAR_USUARIO_RAITER");