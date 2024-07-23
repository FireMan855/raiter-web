import { ObtenerUsuariosRespuesta } from "../../../shared/services/raiter-api-client.service";

export type MisDatosUsuarioModel = Pick<ObtenerUsuariosRespuesta, 'UserName' | 'Rol' | 'Email' | 'PhoneNumber'>