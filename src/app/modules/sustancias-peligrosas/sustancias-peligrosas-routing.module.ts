import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustanciasPeligrosasAdministracionPage } from './pages/sustancias-peligrosas-administracion/sustancias-peligrosas-administracion.page';

const routes: Routes = [
  { path:'', title: 'Sustancias peligrosas', component: SustanciasPeligrosasAdministracionPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustanciasPeligrosasRoutingModule { }
