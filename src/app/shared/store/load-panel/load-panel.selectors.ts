import { createSelector } from "@ngrx/store";
import { RaiterState } from "./RaiterState.interface";

const raiterStateSelector = (state : RaiterState) => state
export const loadPanelGeneralSelector = createSelector(
    raiterStateSelector,
    r => r.loadPanelGeneral
);