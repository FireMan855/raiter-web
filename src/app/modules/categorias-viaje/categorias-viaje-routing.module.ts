import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasViajeAdministracionComponent } from './pages/categorias-viaje-administracion/categorias-viaje-administracion.component';
import { CategoriasViajeRegistrarPage } from './pages/categorias-viaje-registrar/categorias-viaje-registrar.page';
import { CategoriasViajeDetalleComponent } from './pages/categorias-viaje-detalle/categorias-viaje-detalle.component';
import { CategoriasViajeEditarPage } from './pages/categorias-viaje-editar/categorias-viaje-editar.page';

const routes: Routes = [
  { path: '', component: CategoriasViajeAdministracionComponent, title: 'Administración de categorías de viaje'},
  { path: 'Registrar', component: CategoriasViajeRegistrarPage, title: 'Registrar categoría de viaje'},
  { path: 'Detalles/:id', component: CategoriasViajeDetalleComponent, title: 'Detalles de categoría de viaje'},
  { path: 'Editar/:id', component: CategoriasViajeEditarPage, title: 'Editar categoría de viaje'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasViajeRoutingModule { }
