import { Component, OnDestroy } from '@angular/core';
import { ObtenerUsuariosRespuesta, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { RaiterState } from '../../../../shared/store/load-panel/RaiterState.interface';
import { Store } from '@ngrx/store';
import { usuarioRaiterIdSelector } from '../../../../shared/store/usuario-raiter/usuario-raiter.selectors';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrl: './mi-cuenta.page.css'
})
export class MiCuentaPage implements OnDestroy {

  model?: ObtenerUsuariosRespuesta
  private readonly destroyer$ = new Subject<void>();

  constructor(private readonly usuarioClient : UsuarioClient, private readonly store: Store<RaiterState>){
    store.select(usuarioRaiterIdSelector).pipe(
      filter(x => !!x),
      takeUntil(this.destroyer$)
    ).subscribe(id => {
      usuarioClient.obtenerUsuario(id, ApiArea).subscribe(response => {
        this.model = response;
      })
    });
  }
  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }


}
