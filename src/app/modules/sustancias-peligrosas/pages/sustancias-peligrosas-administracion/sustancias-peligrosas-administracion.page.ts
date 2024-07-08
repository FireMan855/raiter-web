import { Component, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent } from 'devextreme/ui/data_grid';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';

@Component({
  selector: 'app-sustancias-peligrosas-administracion',
  templateUrl: './sustancias-peligrosas-administracion.page.html',
  styleUrl: './sustancias-peligrosas-administracion.page.css'
})
export class SustanciasPeligrosasAdministracionPage {
  dataSource : DataSource;
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady: (evt: ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onOpcClick: (evt: ColumnButtonClickEvent) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetOptions.items = [
        { command: 'detalles', text: 'Detalles', icon: 'fas fa-eye', data: columnaOpcion.data },
        { command: 'editar', text: 'Editar', icon: 'fas fa-pencil-alt', data: columnaOpcion.data },
        { command: 'eliminar', text: 'Eliminar', icon: 'fas fa-trash', type: 'danger', stylingMode: 'contained', data: columnaOpcion.data }
      ];
      this.dxActionSheetOptions.visible = true;
      this.dxActionSheetOptions.target = columnaOpcion.cellElement;
    },
    onExporting: (evt: ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        exportingEvent: evt,
        nombreArchivo: 'Sustancias peligrosas',
        nombreEncabezado: 'SUSTANCIAS PELIGROSAS',
        nombreHojaCalculo: 'SUSTANCIAS PELIGROSAS',
        celdaCombinar: 'D1'
      });
    }
  }
    /**
   * Opciones del menú de las sustancias peligrosas
   */
    dxActionSheetOptions: DxActionSheetOptions<any> = {
      title: 'Opciones',
      usePopover: true,
      visible: false,
      onItemClick: (evt: ItemClickEvent<DxActionItem<any>>) => {
        switch (evt.itemData?.command) {
          case 'editar':
            break;
          case 'eliminar':            
            break;
        }
  
      },
      items: [],
      target: ''
    }
  @ViewChild(DxDataGridComponent) dataGrid! : DxDataGridComponent;
  constructor(private readonly devExtremeService : DevextremeService){
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key: 'SustanciaPeligrosaId',
      loadUrl: 'SustanciaPeligrosa/ObtenerSustanciasPeligrosasGrid'
    })
  }

}
