import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasViajeRoutingModule } from './categorias-viaje-routing.module';
import { CategoriasViajeAdministracionComponent } from './pages/categorias-viaje-administracion/categorias-viaje-administracion.component';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';
import { CategoriasViajeRegistrarPage } from './pages/categorias-viaje-registrar/categorias-viaje-registrar.page';
import { CategoriasViajeFormularioComponent } from './components/categorias-viaje-formulario/categorias-viaje-formulario.component';
import { CategoriasViajeDetalleComponent } from './pages/categorias-viaje-detalle/categorias-viaje-detalle.component';
import { CategoriasViajeEditarPage } from './pages/categorias-viaje-editar/categorias-viaje-editar.page';


@NgModule({
  declarations: [
    CategoriasViajeAdministracionComponent,
    CategoriasViajeRegistrarPage,
    CategoriasViajeFormularioComponent,
    CategoriasViajeDetalleComponent,
    CategoriasViajeEditarPage
  ],
  imports: [
    CommonModule,
    CategoriasViajeRoutingModule,
    DevextrememainModule
  ]
})
export class CategoriasViajeModule { }
