import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxActionSheetModule, DxButtonModule, DxDataGridModule, DxPopupModule, DxTextBoxModule, DxValidatorModule} from 'devextreme-angular';
import { DxDataGridDefaultComponent } from './dx-data-grid-default/dx-data-grid-default.component'


@NgModule({
  declarations: [
    DxDataGridDefaultComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports:[
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxActionSheetModule,
    DxDataGridModule,
    DxPopupModule,
    DxDataGridDefaultComponent
  ]
})
export class DevextrememainModule { }
