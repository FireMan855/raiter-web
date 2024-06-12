import { createAction, props } from "@ngrx/store";

export const mostrarLoadPanelGeneralAction = createAction("MOSTRAR_LOADPANEL_GENERAL", props<{mensaje : string}>());
export const ocultarLoadPanelGeneralAction = createAction("OCULTAR_LOADPANEL_GENERAL");