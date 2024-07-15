import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustanciasPeligrosasRoutingModule } from './sustancias-peligrosas-routing.module';
import { SustanciasPeligrosasAdministracionPage } from './pages/sustancias-peligrosas-administracion/sustancias-peligrosas-administracion.page';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';
import { SustanciasPeligrosasRegistrarPage } from './pages/sustancias-peligrosas-registrar/sustancias-peligrosas-registrar.page';
import { SustanciasPeligrosasFormularioComponent } from './components/sustancias-peligrosas-formulario/sustancias-peligrosas-formulario.component';
import { SustanciasPeligrosasEditarPage } from './pages/sustancias-peligrosas-editar/sustancias-peligrosas-editar.page';
import { SustanciasPeligrosasDetallesPage } from './pages/sustancias-peligrosas-detalles/sustancias-peligrosas-detalles.page';


@NgModule({
  declarations: [
    SustanciasPeligrosasAdministracionPage,
    SustanciasPeligrosasRegistrarPage,
    SustanciasPeligrosasFormularioComponent,
    SustanciasPeligrosasEditarPage,
    SustanciasPeligrosasDetallesPage
  ],
  imports: [
    CommonModule,
    DevextrememainModule,
    SustanciasPeligrosasRoutingModule
  ]
})
export class SustanciasPeligrosasModule { }
