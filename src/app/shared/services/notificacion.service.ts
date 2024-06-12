import { Injectable } from '@angular/core';
import { confirm } from 'devextreme/ui/dialog'
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
}
