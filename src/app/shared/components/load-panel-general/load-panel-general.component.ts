import { Component, OnDestroy } from '@angular/core';
import { DxLoadPanelModule } from 'devextreme-angular';
import { LoadPanelGeneralState, RaiterState } from '../../store/load-panel/RaiterState.interface';
import { Store } from '@ngrx/store';
import { loadPanelGeneralSelector } from '../../store/load-panel/load-panel.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-load-panel-general',
  standalone: true,
  imports: [DxLoadPanelModule],
  templateUrl: './load-panel-general.component.html',
  styleUrl: './load-panel-general.component.css',
})
export class LoadPanelGeneralComponent implements OnDestroy {

  loadPanelState: LoadPanelGeneralState ={
    visible: false,
    mensaje: 'Cargando'
  }
  private readonly finalizer$ = new Subject<void>();

  constructor(store : Store<RaiterState>){
    store.select(loadPanelGeneralSelector).pipe(takeUntil(this.finalizer$)).subscribe(lp => {
      this.loadPanelState = lp;
    });
  }
  ngOnDestroy(): void {
    this.finalizer$.next();
    this.finalizer$.complete();
  }

}
