import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportistasRoutingModule } from './transportistas-routing.module';
import { TransportistasAdministracionPage } from './pages/transportistas-administracion/transportistas-administracion.page';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';


@NgModule({
  declarations: [
    TransportistasAdministracionPage
  ],
  imports: [
    CommonModule,
    TransportistasRoutingModule,
    DevextrememainModule
  ]
})
export class TransportistasModule { }
