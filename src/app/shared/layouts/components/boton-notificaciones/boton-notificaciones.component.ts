import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxScrollViewModule } from 'devextreme-angular';
import { FirebaseNotificacionClient, FirebaseNotificacionRespuesta, UsuarioClient } from '../../../services/raiter-api-client.service';
import { ApiArea } from '../../../services/raiter-api-client.utils';
import { DateFromNowPipe } from '../../../pipes/date-from-now.pipe';

@Component({
  selector: 'app-boton-notificaciones',
  standalone: true,
  imports: [DxScrollViewModule, CommonModule, RouterModule, DateFromNowPipe],
  templateUrl: './boton-notificaciones.component.html',
  styleUrl: './boton-notificaciones.component.css'
})
export class BotonNotificacionesComponent {
  readonly notificaciones = signal<FirebaseNotificacionRespuesta[]>([]);
  readonly numNotificacionesNoLeidas = computed(() => {
    return this.notificaciones().filter(x => !x.Leida).length
  })


  constructor(private readonly notificacionClient : FirebaseNotificacionClient){
    notificacionClient.obtenerUltimasNotificaciones(ApiArea).subscribe(respuesta => {
      this.notificaciones.set(respuesta);
    })
  }

}
