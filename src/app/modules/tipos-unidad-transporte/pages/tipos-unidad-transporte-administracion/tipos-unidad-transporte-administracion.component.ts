import { Component, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent } from 'devextreme/ui/data_grid_types';
import { DxDataGridComponent } from 'devextreme-angular';
import { ItemClickEvent } from 'devextreme/ui/action_sheet_types';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { Router } from '@angular/router';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { TipoUnidadTransporteClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';

@Component({
  selector: 'app-tipos-unidad-transporte-administracion',
  templateUrl: './tipos-unidad-transporte-administracion.component.html',
  styleUrl: './tipos-unidad-transporte-administracion.component.css'
})
export class TiposUnidadTransporteAdministracionComponent {
  dataSource: DataSource
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady: (evt: ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onOpcClick: (evt: ColumnButtonClickEvent) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetOptions.items = [
        { command: 'editar', text: 'Editar', icon: 'fas fa-pencil-alt', data: columnaOpcion.data },
        { command: 'eliminar', text: 'Eliminar', icon: 'fas fa-trash', type: 'danger', stylingMode: 'contained', data: columnaOpcion.data }
      ];
      this.dxActionSheetOptions.visible = true;
      this.dxActionSheetOptions.target = columnaOpcion.cellElement;
    },
    onRegistrarClick: () => {
      this.router.navigateByUrl('/TipoUnidadTransporte/Registrar');
    },
    onExporting: (evt: ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        exportingEvent: evt,
        nombreArchivo: 'Tipos de unidad de transporte',
        nombreEncabezado: 'TIPOS DE UNIDAD DE TRANSPORTE',
        nombreHojaCalculo: 'TIPOS DE UNIDAD DE TRANSPORTE',
        celdaCombinar: 'D1'
      })
    }
  }
  /**
   * Opciones del menú de las unidades de medida
   */
  dxActionSheetOptions: DxActionSheetOptions<{ Id: string, Nombre: string }> = {
    title: 'Opciones',
    usePopover: true,
    visible: false,
    onItemClick: (evt: ItemClickEvent<DxActionItem<{ Id: string, Nombre: string }>>) => {
      switch (evt.itemData?.command) {
        case 'editar':
          this.router.navigateByUrl(`/TipoUnidadTransporte/Editar/${evt.itemData.data?.Id}`);
          break;
        case 'eliminar':
          this.notificacionService.confirm(`¿Desea eliminar la unidad de medida [${evt.itemData.data?.Nombre}]?`)
            .then(response => {
              if (response) {
                this.loadPanelService.mostrarLoadPanel('Eliminando tipo de unidad de transporte');
                this.tipoUnidadClient.eliminar(evt.itemData?.data?.Id, ApiArea).subscribe(() => {
                  this.notificacionService.success(`La unidad de medida [${evt.itemData?.data?.Nombre}] fue eliminada correctamente`);
                  this.dataGrid.instance.refresh();
                }).add(() => {
                  this.loadPanelService.ocultarLoadPanel();
                })
              }
            })
          break;
      }

    },
    items: [],
    target: ''
  }
  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent
  constructor(private readonly devExtremeService: DevextremeService, private readonly router: Router,
    private readonly loadPanelService: LoadPanelService, private readonly notificacionService: NotificacionService,
    private readonly tipoUnidadClient: TipoUnidadTransporteClient
  ) {
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key: 'Id',
      loadUrl: 'TipoUnidadTransporte/ObtenerTiposUnidadTransporteGrid'
    });
  }
}
