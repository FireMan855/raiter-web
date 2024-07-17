import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasViajeAdministracionComponent } from './pages/categorias-viaje-administracion/categorias-viaje-administracion.component';

const routes: Routes = [
  { path: '', component: CategoriasViajeAdministracionComponent, title: 'Administración de categorías de viaje'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasViajeRoutingModule { }
