import { Injectable } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import DataSource from 'devextreme/data/data_source';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import saveAs from 'file-saver';
import { ExportingEvent } from 'devextreme/ui/data_grid';

@Injectable({
  providedIn: 'root'
})
export class DevextremeService {

  readonly baseUrl= `http://localhost:57909/api/`

  constructor() { }

  crearDevExtremeStore(params : CustomStoreParameters){
    const aspNetStore = AspNetData.createStore({
      key : params.key,
      loadUrl : `${this.baseUrl}${params.loadUrl}`
    });
    return new DataSource(aspNetStore);
  }
  exportarGridAExcel(params : ExportarGridAExcelParameters){
      const e = params.exportingEvent.component.instance();
      e.beginUpdate();
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet(params.nombreHojaCalculo);
      worksheet.mergeCells(`A1:${params.celdaCombinar}`);
      worksheet.getCell('A1').value = params.nombreEncabezado;
      worksheet.getCell('A1').style = { font: { size: 12, bold: true } };
      worksheet.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' }
      exportDataGrid({
        component: e,
        worksheet: worksheet,
        autoFilterEnabled: true,
        customizeCell(options) {
          if (options.gridCell?.rowType === 'data') {
            if (options.gridCell?.column?.dataType === 'boolean')
              options.excelCell.value = options.gridCell?.value ? "SI" : "NO"
            /*if (!options.gridCell?.data.estaActivo) {
              options.excelCell.font = { color: { argb: 'ffff0000' } };
            }*/
          }
        },
        topLeftCell: { row: 3, column: 1 }
      }).then(function () {
        workbook.xlsx.writeBuffer().then(function (buffer: BlobPart) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${params.nombreArchivo}_` + new Date().getTime().toString() + '.xlsx');
        });
      }).then(function () {
        e.endUpdate();
      });
  }
}
export interface CustomStoreParameters{
  key: string | string[],
  loadUrl: string
}
export interface ExportarGridAExcelParameters{
  exportingEvent : ExportingEvent,
  nombreArchivo : string,
  nombreHojaCalculo: string,
  nombreEncabezado: string,
  celdaCombinar: string
}