import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxCheckBoxModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';



@NgModule({
  declarations: [],
  exports: [
    DxTextBoxModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxValidatorModule
  ]
})
export class DevextremeloginModule { }
