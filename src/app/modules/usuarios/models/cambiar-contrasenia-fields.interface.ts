export interface CambiarContraseniaFields{
    txtContraseniaActualMode : ContraseniaMode,
    txtContraseniaNuevaMode : ContraseniaMode,
    txtRepetirContraseniaMode : ContraseniaMode,
    txtContraseniaActualClick : () => void
    txtContraseniaNuevaClick: () => void,
    txtRepetirContraseniaClick: () => void
}
export type ContraseniaMode = 'password' | 'text'