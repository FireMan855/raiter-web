import { TipoUnidadTransporteRegistrarPeticion } from "../../../shared/services/raiter-api-client.service";

export type TipoUnidadTransporteFormulario = Partial<Pick<TipoUnidadTransporteRegistrarPeticion, 'Tipo'>> & 
Omit<TipoUnidadTransporteRegistrarPeticion, 'Tipo'>