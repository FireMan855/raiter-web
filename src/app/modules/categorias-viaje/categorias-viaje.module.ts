import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasViajeRoutingModule } from './categorias-viaje-routing.module';
import { CategoriasViajeAdministracionComponent } from './pages/categorias-viaje-administracion/categorias-viaje-administracion.component';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';


@NgModule({
  declarations: [
    CategoriasViajeAdministracionComponent
  ],
  imports: [
    CommonModule,
    CategoriasViajeRoutingModule,
    DevextrememainModule
  ]
})
export class CategoriasViajeModule { }
