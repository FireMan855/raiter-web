import { Component, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent } from 'devextreme/ui/data_grid';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { EditarUnidadMedidaPeticion, RegistrarUnidadMedidaPeticion, UnidadMedidaClient } from '../../../../shared/services/raiter-api-client.service';
import { LoadPanelService } from '../../../../shared/services/load-panel.service';
import { ApiArea } from '../../../../shared/services/raiter-api-client.utils';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-unidades-medida-administracion',
  templateUrl: './unidades-medida-administracion.page.html',
  styleUrl: './unidades-medida-administracion.page.css'
})
export class UnidadesMedidaAdministracionPage {
  /**
   * Fuente de las unidades de medida
   */
  dataSource: DataSource
  /**
   * Opciones del grid de unidades de medida
   */
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
    onRegistrarClick: () => {
      this.formularioOptions.title = 'Registrar unidad de medida';
      this.formularioOptions.soloLectura = false;
      this.formularioOptions.model = undefined
      setTimeout(()=>this.formularioOptions.visible = true);
    },
    onExporting : (evt : ExportingEvent) => {
      this.devExtremeService.exportarGridAExcel({
        exportingEvent: evt,
        nombreArchivo: 'Unidades de medida',
        nombreEncabezado: 'UNIDADES DE MEDIDA',
        nombreHojaCalculo: 'UNIDADES DE MEDIDA',
        celdaCombinar: 'D1'
      })
    }
  }
  /**
   * Opciones del menú de las unidades de medida
   */
  dxActionSheetOptions: DxActionSheetOptions<{UnidadMedidaId: string, Nombre: string, Abreviacion: string, Descripcion: string}> = {
    title: 'Opciones',
    usePopover: true,
    visible: false,
    onItemClick: (evt: ItemClickEvent<DxActionItem<{UnidadMedidaId: string, Nombre: string, Abreviacion: string, Descripcion: string}>>) => {
      switch (evt.itemData?.command) {
        case 'detalles':
          this.formularioOptions.soloLectura = true;
          this.formularioOptions.title = 'Detalles de unidad de medida';
          this.formularioOptions.unidadMedidaId = evt.itemData.data?.UnidadMedidaId;
          this.formularioOptions.model = {
            Nombre: evt.itemData.data?.Nombre,
            Abreviacion : evt.itemData.data?.Abreviacion,
            Descripcion: evt.itemData.data?.Descripcion
          };
          setTimeout(()=>this.formularioOptions.visible = true);
          break;
        case 'editar':
          this.formularioOptions.soloLectura = false;
          this.formularioOptions.title = 'Editar unidad de medida';
          this.formularioOptions.unidadMedidaId = evt.itemData.data?.UnidadMedidaId;
          this.formularioOptions.model = {
            Nombre: evt.itemData.data?.Nombre,
            Abreviacion : evt.itemData.data?.Abreviacion,
            Descripcion: evt.itemData.data?.Descripcion
          };
          setTimeout(()=>this.formularioOptions.visible = true);
          break;
          case 'eliminar':
            this.notificacionService.confirm(`¿Desea eliminar la unidad de medida [${evt.itemData.data?.Nombre}]?`).then(response => {
              if(response){
                this.loadPanelService.mostrarLoadPanel('Eliminando unidad de medida');
                this.unidadMedidaClient.eliminarUnidadMedida(evt.itemData?.data?.UnidadMedidaId, ApiArea).subscribe(() => {
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
  formularioOptions = {
    visible: false,
    title: '',
    soloLectura: false,
    unidadMedidaId: <string|undefined>undefined,
    model: <any>{},
    onSalir: () => {
      this.formularioOptions.visible = false;
    }
  }
  /**
   * Instancia del grid de unidades de medida
   */
  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent
  constructor(private readonly devExtremeService: DevextremeService, private readonly unidadMedidaClient : UnidadMedidaClient,
    private readonly loadPanelService : LoadPanelService, private readonly notificacionService : NotificacionService
  ) {
    this.dataSource = devExtremeService.crearDevExtremeStore({
      key: 'UnidadMedidaId',
      loadUrl: 'UnidadMedida/ObtenerUnidadesMedidaGrid'
    });
  }
  guardarUnidad(model : EditarUnidadMedidaPeticion | RegistrarUnidadMedidaPeticion){
    if('UnidadMedidaId' in model && typeof model.UnidadMedidaId !== 'undefined'){
      this.loadPanelService.mostrarLoadPanel('Guardando cambios');
      this.unidadMedidaClient.editarUnidadMedida(model, ApiArea).subscribe(() => {
        this.notificacionService.success('Se guardaron correctamente los cambios a la unidad de medida');
        this.formularioOptions.visible = false;
        this.dataGrid.instance.refresh();
        this.formularioOptions.model = undefined;
      }
      ).add(() => this.loadPanelService.ocultarLoadPanel());
    }
    else{
      this.loadPanelService.mostrarLoadPanel('Registrando unidad de medida');
      this.unidadMedidaClient.registrarUnidadMedida(model, ApiArea).subscribe(() => {
        this.notificacionService.success('La unidad de medida fue registrada correctamente');
        this.formularioOptions.visible = false;
        this.dataGrid.instance.refresh();
        this.formularioOptions.model = undefined;
    }).add(() => this.loadPanelService.ocultarLoadPanel());
    }
  }
}
