import { Injectable } from '@angular/core';
import { confirm, custom } from 'devextreme/ui/dialog'
import notify from 'devextreme/ui/notify';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }
  /**
   * Muestra un popup preguntando si el usuario desea salir de la interfaz actual
   */
  mostrarConfirmacionSalida(mensaje = "Está a punto de salir. Si no ha guardado los cambios, éstos se perderán", titulo = 'Confirmación de salida')
  : Promise<boolean> {
    return confirm(`<div class="text-center"><i class="fas fa-info-circle fa-3x mb-3" style="color:#EE2954;font-size:60px"></i> <br><i><h5>${mensaje}</h5><br><h5>¿Desea salir?</h5></div>`,
      titulo
    );
  }
  mostrarWarningToast(mensaje : string, milisegundos : number = 5000){
    notify(mensaje,'error', milisegundos);
  }
    /**
   * Método que muestra un cuadro de dialogo para noitificacion para un proceso completado correctamente
   * @param mensaje Mensaje corto principal
   * @param detalles Detalles adicionales (opciones)
   */
    public success(mensaje: string, detalles?: string): Promise<boolean> {
      detalles && detalles.trim() !== '' ? detalles = `<br/><p>${detalles}</p>` : detalles = "";
      return custom({
        messageHtml: `<h5 class="text-center"><i class="fas fa-circle-check fa-3x text-success"></i><br/>${mensaje}</h5>${detalles}`,
        showTitle: false,
      })
        .show();
    }
     /**
   * Método que muestra un cuadro de dialogo para confirmacion del usuario
   * @param mensaje Mensaje corto principal
   * @param detalles Detalles adicionales (opciones)
   */
  public confirm(mensaje: string, detalles?: string): Promise<boolean> {
    detalles && detalles.trim() !== '' ? detalles = `<br/><p>${detalles}</p>` : detalles = "";
    return confirm(`<h5 class="text-center"><i class="fas fa-circle-question fa-3x text-warning"></i><br/>${mensaje}</h5>${detalles}`, "Confirmación");
  }
   /**
   * Método que muestra un cuadro de dialogo para noitificacion de advertencia o error
   * @param mensaje Mensaje corto principal
   * @param detalles Detalles adicionales (opciones)
   */
   public warninig(mensaje: string, detalles?: string) {
    detalles && detalles.trim() !== '' ? detalles = `<br/><p>${detalles}</p>` : detalles = "";
    return custom({
      messageHtml: `<h5 class="text-center"><i class="fas fa-triangle-exclamation fa-3x text-warning"></i><br/>${mensaje}</h5>${detalles}`,
      showTitle: false,
    })
      .show();
  }
}
