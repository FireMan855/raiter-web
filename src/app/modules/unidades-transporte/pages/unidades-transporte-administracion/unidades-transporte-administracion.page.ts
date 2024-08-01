import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent } from 'devextreme/ui/data_grid';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';

@Component({
  selector: 'app-unidades-transporte-administracion',
  templateUrl: './unidades-transporte-administracion.page.html',
  styleUrl: './unidades-transporte-administracion.page.css'
})
export class UnidadesTransporteAdministracionPage {
  dataSource!: DataSource
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady: (evt : ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onExporting : (evt : ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        nombreArchivo: 'Unidades de transporte',
        nombreEncabezado: 'UNIDADES DE TRANSPORTE',
        exportingEvent: evt,
        nombreHojaCalculo: 'UNIDADES DE TRANSPORTE',
        celdaCombinar: 'H1'
      })
    },
    onOpcClick: (evt: ColumnButtonClickEvent) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetOptions.items = [
        { command: 'editar', icon: 'fas fa-pencil-alt', text: 'Editar', data: columnaOpcion.data },
        { command: 'eliminar', icon: 'fas fa-trash', text: 'Eliminar', type: 'danger', data: columnaOpcion.data}
      ];      
      this.dxActionSheetOptions.visible = true;
      this.dxActionSheetOptions.target = columnaOpcion.cellElement;
    }
  }
  dxActionSheetOptions: DxActionSheetOptions<any> = {
    title: 'Opciones',
    usePopover: true,
    visible: false,
    onItemClick: (evt: ItemClickEvent<DxActionItem<any>>) => {
      let dataRow = evt.itemData?.data;
      switch (evt.itemData?.command) {

      }
    },
    items: [],
    target: ''
  }
  constructor(private readonly devExtremeService : DevextremeService){
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key: 'UnidadTransporteId',
      loadUrl: 'UnidadTransporte/ObtenerUnidadesTransporteGrid'
    })
  }

}
