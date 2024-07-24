import { Component } from '@angular/core';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import DataSource from 'devextreme/data/data_source';
import { ContentReadyEvent, ExportingEvent, RowPreparedEvent } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-mis-notificaciones',
  templateUrl: './mis-notificaciones.page.html',
  styleUrl: './mis-notificaciones.page.css'
})
export class MisNotificacionesPage {
  
  dataSource! : DataSource
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady:(evt: ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onRowPrepared:(rowInfo: RowPreparedEvent) => {
      if (rowInfo.rowType === "data") {
        if (!rowInfo.data.Leida)
            rowInfo.rowElement.classList.add('text-primary');  
      }
    },
    onExporting:(evt:ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        nombreArchivo: 'Mis notificaciones',
        nombreHojaCalculo: 'MIS NOTIFICACIONES',
        nombreEncabezado: 'MIS NOTIFICACIONES',
        exportingEvent: evt,
        celdaCombinar: 'B1'
      })
    }
  }

  constructor(private readonly devExtremeService : DevextremeService){
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key:'FirebaseNotificacionId',
      loadUrl: 'FirebaseNotificacion/ObtenerMisNotificacionesGrid'
    })
  }

}
