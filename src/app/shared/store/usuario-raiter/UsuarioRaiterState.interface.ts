import { GenerarTokenJWTRespuesta } from "../../services/raiter-api-client.service";

/*export type UsuarioRaiterState = Required<Pick<GenerarTokenJWTRespuesta, 'NombreUsuario' | 'NombreCompleto' | 'Id' | 'Rol' | 'Token'
| 'FechaExpiracion' >>*/
export type UsuarioRaiterState = GenerarTokenJWTRespuesta;