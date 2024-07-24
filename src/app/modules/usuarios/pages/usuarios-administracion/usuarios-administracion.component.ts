import { Component } from '@angular/core';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import DataSource from 'devextreme/data/data_source';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent, RowPreparedEvent } from 'devextreme/ui/data_grid';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { UsuarioClient } from '../../../../shared/services/raiter-api-client.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-administracion',
  templateUrl: './usuarios-administracion.component.html',
  styleUrl: './usuarios-administracion.component.css'
})
export class UsuariosAdministracionComponent {
  dataSource: DataSource
  dxDataGridOptions = {
    totalCount: 0,
    onContentReady: (evt: ContentReadyEvent) => {
      this.dxDataGridOptions.totalCount = evt.component.totalCount();
    },
    onOpcClick: (evt: ColumnButtonClickEvent) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetOptions.items = [
        //{ command: 'desactivar', text: 'Desa', icon: 'fas fa-bam', data: columnaOpcion.data },
        //{ command: 'editar', text: 'Editar', icon: 'fas fa-pencil-alt', data: columnaOpcion.data },
        //{ command: 'eliminar', text: 'Eliminar', icon: 'fas fa-trash', type: 'danger', stylingMode: 'contained', data: columnaOpcion.data }
        { command: 'detalles', icon: 'fas fa-eye', text: 'Detalles', data: columnaOpcion.data},
        { command: 'constancia-fiscal', icon: 'fas fa-scroll', text:'Constancia de situación fiscal', data: columnaOpcion.data}
      ];
      if (columnaOpcion.data.EstaActivo)
        this.dxActionSheetOptions.items.push({ command: 'desactivar', icon: 'fas fa-ban', type: 'danger', text: 'Desactivar', data: columnaOpcion.data });
      else
        this.dxActionSheetOptions.items.push({ command: 'reactivar', icon: 'fas fa-toggle-on', text: 'Activar', data: columnaOpcion.data });
      this.dxActionSheetOptions.visible = true;
      this.dxActionSheetOptions.target = columnaOpcion.cellElement;
    },
    onRowPrepared: (rowInfo: RowPreparedEvent) => {
      if (rowInfo.rowType === "data") {
        if (!rowInfo.data.EstaActivo)
          rowInfo.rowElement.style.color = '#FF0000';
      }
    },
    onExporting : (evt: ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        nombreArchivo: 'Usuarios',
        exportingEvent: evt,
        nombreEncabezado: 'USUARIOS',
        nombreHojaCalculo: 'USUARIOS',
        celdaCombinar: 'J1',
        customizeCell: (options) => {
          if (!options.gridCell?.data.EstaActivo) {
            options.excelCell.font = { color: { argb: 'ffff0000' } };
          }
        }
      });
    }
  }


  constructor(private readonly devExtremeService: DevextremeService, private readonly notificacionService: NotificacionService,
    private readonly loadPanelService: LoadPanelService, private readonly usuariosClient: UsuarioClient, private readonly router: Router
  ) {
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key: 'Id',
      loadUrl: 'Usuario/ObtenerUsuarios'
    })
  }

  dxActionSheetOptions: DxActionSheetOptions<any> = {
    title: 'Opciones',
    usePopover: true,
    visible: false,
    onItemClick: (evt: ItemClickEvent<DxActionItem<any>>) => {
      let dataRow = evt.itemData?.data;
      switch (evt.itemData?.command) {
        case 'detalles':
          this.router.navigateByUrl('/Usuarios/Detalles/' + evt.itemData.data.Id);
          break;
        case 'desactivar':
          this.notificacionService.confirm('¿Desea desactivar al usuario? [' + dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '') + ']. <br> Una vez desactivado el usuario no podrá autenticarse en la plataforma ni hacer uso de las características ofrecidas por ésta.', 'Desactivación de usuario').then(response => {
            if (response) {
              this.loadPanelService.mostrarLoadPanel('Desactivando usuario');
              this.usuariosClient.desactivarUsuario(dataRow.Id, ApiArea).subscribe(() => {
                this.dataSource.reload();
                this.notificacionService.success(`El usuario [${dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '')}] fue desactivado correctamente`);
              }).add(() => {
                this.loadPanelService.ocultarLoadPanel();
              });
            }
          })
          break;
        case 'reactivar':
          this.notificacionService.confirm('¿Desea activar al usuario? [' + dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '') + ']. <br>Una vez activado el usuario podrá acceder normalmente a la plataforma.', 'Activación de usuario').then(response => {
            if (response) {
              this.loadPanelService.mostrarLoadPanel('Activando usuario');
              this.usuariosClient.reactivarUsuario(dataRow.Id, ApiArea).subscribe(() => {
                this.dataSource.reload();
                this.notificacionService.success(`El usuario [${dataRow.Nombre + ' ' + dataRow.Paterno + (dataRow.Materno ? ' ' + dataRow.Materno : '')}] fue activado correctamente`);
              }).add(() => {
                this.loadPanelService.ocultarLoadPanel();
              })
            }
          })
          break;
          case 'constancia-fiscal':
            this.dxPopUpConstanciaOptions.usuarioId = dataRow.Id;
            this.dxPopUpConstanciaOptions.nombreUsuario = dataRow.UserName;
            this.dxPopUpConstanciaOptions.visible = true;
            break;
      }

    },
    items: [],
    target: ''
  }
  dxPopUpConstanciaOptions = {
    usuarioId: '',
    nombreUsuario : '',
    visible :false
  }
}
