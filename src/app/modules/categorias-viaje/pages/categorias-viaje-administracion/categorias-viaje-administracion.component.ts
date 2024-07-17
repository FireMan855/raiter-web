import { Component, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremeService } from '../../../../shared/services/devextreme.service';
import { ColumnButtonClickEvent, ContentReadyEvent, ExportingEvent } from 'devextreme/ui/data_grid';
import { DxDataGridComponent } from 'devextreme-angular';
import { DxActionItem, DxActionSheetOptions } from '../../../../shared/modules/devextrememain/interfaces/dxActionSheetOptions';
import { ItemClickEvent } from 'devextreme/ui/action_sheet';

@Component({
  selector: 'app-categorias-viaje-administracion',
  templateUrl: './categorias-viaje-administracion.component.html',
  styleUrl: './categorias-viaje-administracion.component.css'
})
export class CategoriasViajeAdministracionComponent {

  dataSource : DataSource

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
        { command: 'agregar-subcategoria', text: 'Agregar Subcategoría', data: columnaOpcion.data, icon: ' fas fa-plus'}
        //{ command: 'eliminar', text: 'Eliminar', icon: 'fas fa-trash', type: 'danger', stylingMode: 'contained', data: columnaOpcion.data }
      ];
      this.dxActionSheetOptions.visible = true;
      this.dxActionSheetOptions.target = columnaOpcion.cellElement;
    },
    onRegistrarClick: () => {

    },
    onExporting: (evt: ExportingEvent) => {
      this.devextreme.exportarGridAExcel({
        exportingEvent: evt,
        nombreArchivo: 'Categorias viaje',
        nombreEncabezado: 'CATEGORÍAS DE VIAJE',
        nombreHojaCalculo: 'CATEGORIAS VIAJE',
        celdaCombinar: 'E1'
      });
    }
    
  }
  dxDataGridChildOptions= {
    onOpcClick: (evt: any) => {
      let columnaOpcion = (<any>evt.row).cells.find((element: any) => element.column.name && element.column.name === "opciones");
      this.dxActionSheetChildOptions.items = [
        { command: 'detalles', text: 'Detalles', icon: 'fas fa-eye', data: columnaOpcion.data },
        { command: 'editar', text: 'Editar', icon: 'fas fa-pencil-alt', data: columnaOpcion.data },
        //{ command: 'eliminar', text: 'Eliminar', icon: 'fas fa-trash', type: 'danger', stylingMode: 'contained', data: columnaOpcion.data }
      ];
      this.dxActionSheetChildOptions.visible = true;
      this.dxActionSheetChildOptions.target = columnaOpcion.cellElement;
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
        /*switch (evt.itemData?.command) {
          case 'detalles':
            this.router.navigateByUrl(`/SustanciaPeligrosa/Detalles/${evt.itemData.data.SustanciaPeligrosaId}`);
            break;
          case 'editar':
            this.router.navigateByUrl(`/SustanciaPeligrosa/Editar/${evt.itemData.data.SustanciaPeligrosaId}`)
            break;
          case 'eliminar':    
          this.notificacionService.confirm(`¿Desea eliminar la sustancia peligrosa [${evt.itemData.data?.Nombre}]?`)
          .then(response => {
            if (response) {
              this.loadPanelService.mostrarLoadPanel('Eliminando sustancia peligrosa');
              this.sustanciaPeligrosaCliente.eliminarSustanciaPeligrosa(evt.itemData?.data?.SustanciaPeligrosaId, ApiArea).subscribe(() => {
                this.notificacionService.success(`La sustancia peligrosa [${evt.itemData?.data?.Nombre}] fue eliminada correctamente`);
                this.dataGrid.instance.refresh();
              }).add(() => {
                this.loadPanelService.ocultarLoadPanel();
              })
            }
          })        
            break;
        }*/
  
      },
      items: [],
      target: ''
    }
    dxActionSheetChildOptions: DxActionSheetOptions<any> ={
      title: 'Opciones',
      usePopover: true,
      visible: false,
      onItemClick: (evt: ItemClickEvent<DxActionItem<any>>) => {
      },
      items: [],
      target: ''
    }
  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent


  constructor(private readonly devextreme : DevextremeService){
    this.dataSource = devextreme.crearDevExtremeStore({
      key : 'CategoriaViajeId',
      loadUrl: 'CategoriaViaje/ObtenerCategoriasGrid'
    })
  }

}
