import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { DxLoadPanelModule } from 'devextreme-angular';
import { LoadPanelGeneralState, RaiterState } from '../../store/load-panel/RaiterState.interface';
import { Store } from '@ngrx/store';
import { loadPanelGeneralSelector } from '../../store/load-panel/load-panel.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css',
})
export class LoginLayoutComponent  implements OnDestroy{
  /**
   * Año de copyright de Raiter para mostrar en el footer
   */
  readonly copyrightYear : number = new Date().getFullYear();
  /**
   * Estado actual del panel de carga, para mostrar u ocultarlo, por ejemplo en llamadas HTTP
   */
  loadPanelState : LoadPanelGeneralState = { visible : false, mensaje: 'Cargando'}
  /**
   * Finalizador para cerrar la subscripción al store cuando se destruya el componente
   */
  private readonly finalizer$ = new Subject<void>();
  constructor(private readonly store : Store<RaiterState>, private readonly cdRef: ChangeDetectorRef){

  }
  ngOnInit(){
    this.cdRef.detectChanges();
    this.store.select(loadPanelGeneralSelector).pipe(takeUntil(this.finalizer$)).subscribe(lp => {
      this.loadPanelState = lp;
    });
  }
  ngOnDestroy(): void {
    this.finalizer$.next();
    this.finalizer$.complete();
  }
}
