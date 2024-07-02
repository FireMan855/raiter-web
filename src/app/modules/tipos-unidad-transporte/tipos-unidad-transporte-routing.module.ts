import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposUnidadTransporteAdministracionComponent } from './pages/tipos-unidad-transporte-administracion/tipos-unidad-transporte-administracion.component';
import { TiposUnidadTransporteRegistrarComponent } from './pages/tipos-unidad-transporte-registrar/tipos-unidad-transporte-registrar.component';
import { TiposUnidadTransporteEditarComponent } from './pages/tipos-unidad-transporte-editar/tipos-unidad-transporte-editar.component';

const routes: Routes = [
  { path: '', title: 'Tipos de unidad de transporte', component: TiposUnidadTransporteAdministracionComponent },
  { path: 'Registrar', title: 'Registrar tipo de unidad de transporte', component: TiposUnidadTransporteRegistrarComponent},
  { path: 'Editar/:id', title: 'Editar tipo de unidad de transporte', component: TiposUnidadTransporteEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposUnidadTransporteRoutingModule { }
