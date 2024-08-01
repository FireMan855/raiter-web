import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesTransporteRoutingModule } from './unidades-transporte-routing.module';
import { UnidadesTransporteAdministracionPage } from './pages/unidades-transporte-administracion/unidades-transporte-administracion.page';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';


@NgModule({
  declarations: [  
    UnidadesTransporteAdministracionPage
  ],
  imports: [
    CommonModule,
    UnidadesTransporteRoutingModule,
    DevextrememainModule
  ]
})
export class UnidadesTransporteModule { }
