import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustanciasPeligrosasAdministracionPage } from './pages/sustancias-peligrosas-administracion/sustancias-peligrosas-administracion.page';
import { SustanciasPeligrosasRegistrarPage } from './pages/sustancias-peligrosas-registrar/sustancias-peligrosas-registrar.page';
import { SustanciasPeligrosasEditarPage } from './pages/sustancias-peligrosas-editar/sustancias-peligrosas-editar.page';
import { SustanciasPeligrosasDetallesPage } from './pages/sustancias-peligrosas-detalles/sustancias-peligrosas-detalles.page';

const routes: Routes = [
  { path:'', title: 'Sustancias peligrosas', component: SustanciasPeligrosasAdministracionPage},
  { path: 'Registrar', title: 'Registrar sustancia peligrosa', component: SustanciasPeligrosasRegistrarPage},
  { path: 'Editar/:id', title: 'Editar sustancia peligrosa', component: SustanciasPeligrosasEditarPage},
  { path: 'Detalles/:id', title: 'Detalles de sustancia peligrosa', component: SustanciasPeligrosasDetallesPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustanciasPeligrosasRoutingModule { }
