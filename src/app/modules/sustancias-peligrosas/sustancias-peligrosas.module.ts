import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustanciasPeligrosasRoutingModule } from './sustancias-peligrosas-routing.module';
import { SustanciasPeligrosasAdministracionPage } from './pages/sustancias-peligrosas-administracion/sustancias-peligrosas-administracion.page';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';


@NgModule({
  declarations: [
    SustanciasPeligrosasAdministracionPage
  ],
  imports: [
    CommonModule,
    DevextrememainModule,
    SustanciasPeligrosasRoutingModule
  ]
})
export class SustanciasPeligrosasModule { }
