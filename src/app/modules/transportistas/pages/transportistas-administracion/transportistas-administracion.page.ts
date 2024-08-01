import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent, RowPreparedEvent } from 'devextreme/ui/data_grid';
import { EstadoAprobacionTransportista, ObtenerEstadosVerificacionTransportistaCombo, TransportistaClient, UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { createStore, CustomStore } from 'devextreme-aspnet-data-nojquery';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-transportistas-administracion',
  templateUrl: './transportistas-administracion.page.html',
  styleUrl: './transportistas-administracion.page.css'
})
export class TransportistasAdministracionPage {
  dataSource!: DataSource
  estadosTransportistaDataSource: CustomStore
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady: (evt: ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onRowPrepared: (rowInfo: RowPreparedEvent) => {
      if (rowInfo.rowType === "data") {
        switch (rowInfo.data.EstadoVerificacion) {
          case EstadoAprobacionTransportista.EnProceso:
            rowInfo.rowElement.style.color = '#6C869D';
            break;
          case EstadoAprobacionTransportista.Rechazado:
            rowInfo.rowElement.style.color = '#FF2D50';
            break;
        }
        if (!rowInfo.data.EstaActivo)
          rowInfo.rowElement.style.color = '#FF0000';
      }
    },
    onExporting: (evt: ExportingEvent) => {
      this.devExtreme.exportarGridAExcel({
        nombreArchivo: 'Transportistas',
        nombreEncabezado: 'TRANSPORTISTAS',
        nombreHojaCalculo: 'TRANSPORTISTAS',
        exportingEvent: evt,
        celdaCombinar: 'L1',
        customizeCell: (options) => {
          switch (options.gridCell?.data.EstadoVerificacion) {
            case EstadoAprobacionTransportista.EnProceso:
              options.excelCell.font = { color: { argb: 'ff6c869d' } };
              break;
            case EstadoAprobacionTransportista.Rechazado:
              options.excelCell.font = { color: { argb: 'ffff2d50' } };
              break;
          }
          if (!options.gridCell?.data.EstaActivo) {
            options.excelCell.font = { color: { argb: 'ffff0000' } };
          }
        }
      })
    },
    onOpcClick: (evt: ColumnButtonClickEvent) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetOptions.items = [
        { command: 'detalles', icon: 'fas fa-eye', text: 'Detalles', data: columnaOpcion.data },
      ];
      if (columnaOpcion.data.EstaActivo)
        this.dxActionSheetOptions.items.push({ command: 'desactivar', icon: 'fas fa-ban', type: 'danger', text: 'Desactivar', data: columnaOpcion.data });
      else
        this.dxActionSheetOptions.items.push({ command: 'reactivar', icon: 'fas fa-toggle-on', text: 'Activar', data: columnaOpcion.data });
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
        case 'desactivar':
          this.notificacionService.confirm('¿Desea desactivar al usuario? [' + dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '') + ']. <br> Una vez desactivado el usuario no podrá autenticarse en la plataforma ni hacer uso de las características ofrecidas por ésta.', 'Desactivación de usuario').then(response => {
            if (response) {
              this.loadPanelService.mostrarLoadPanel('Desactivando usuario');
              this.usuariosClient.desactivarUsuario(dataRow.UsuarioId, ApiArea).subscribe(() => {
                this.dataSource.reload();
                this.notificacionService.success(`El usuario [${dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '')}] fue desactivado correctamente`);
              }).add(() => {
                this.loadPanelService.ocultarLoadPanel();
              });
            }
          });
          break;
        case 'reactivar':
          this.notificacionService.confirm('¿Desea activar al usuario? [' + dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '') + ']. <br>Una vez activado el usuario podrá acceder normalmente a la plataforma.', 'Activación de usuario').then(response => {
            if (response) {
              this.loadPanelService.mostrarLoadPanel('Activando usuario');
              this.usuariosClient.reactivarUsuario(dataRow.UsuarioId, ApiArea).subscribe(() => {
                this.dataSource.reload();
                this.notificacionService.success(`El usuario [${dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '')}] fue activado correctamente`);
              }).add(() => {
                this.loadPanelService.ocultarLoadPanel();
              })
            }
          });
          break;
      }
    },
    items: [],
    target: ''
  }

  constructor(private readonly devExtreme: DevextremeService, private readonly usuariosClient: UsuarioClient,
    private readonly loadPanelService: LoadPanelService, private readonly notificacionService: NotificacionService
  ) {
    this.dataSource = devExtreme.crearDevExtremeStore({
      key: 'TransportistaId',
      loadUrl: 'Transportista/ObtenerTransportistasGrid'
    });
    this.estadosTransportistaDataSource = createStore({
      loadMode: "raw",
      loadUrl : `${environment.baseUrl}Transportista/ObtenerEstadosVerificacionTransportista`
    })
  }

}
