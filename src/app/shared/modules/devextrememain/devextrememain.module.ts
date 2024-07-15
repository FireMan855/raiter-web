import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxActionSheetModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFileUploaderModule, DxPopupModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule} from 'devextreme-angular';
import { DxDataGridDefaultComponent } from './dx-data-grid-default/dx-data-grid-default.component'


@NgModule({
  declarations: [
    DxDataGridDefaultComponent
  ],
  imports: [
    CommonModule,
    //DxDataGridModule
  ],
  exports:[
    DxButtonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxActionSheetModule,
    DxDataGridModule,
    DxPopupModule,
    DxFileUploaderModule,
    DxDataGridDefaultComponent
  ]
})
export class DevextrememainModule { }
