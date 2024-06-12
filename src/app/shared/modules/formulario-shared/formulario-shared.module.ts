import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoostrapSharedModule } from '../boostrap-shared/boostrap-shared.module';
import { AsteriscoRojoComponent } from '../../components/asterisco-rojo/asterisco-rojo.component';
import { TooltipCampoComponent } from '../../components/tooltip-campo/tooltip-campo.component';



@NgModule({
  declarations: [
    AsteriscoRojoComponent,
    TooltipCampoComponent
  ],
  imports: [
    CommonModule,
    BoostrapSharedModule
  ],
  exports: [
    AsteriscoRojoComponent,
    TooltipCampoComponent
  ]
})
export class FormularioSharedModule { }
