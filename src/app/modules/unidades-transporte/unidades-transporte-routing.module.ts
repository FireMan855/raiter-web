import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesTransporteAdministracionPage } from './pages/unidades-transporte-administracion/unidades-transporte-administracion.page';
import { UsuarioGuard } from '../../shared/guards/usuario-guard.service';
import { RolesStrings } from '../../shared/store/usuario-raiter/roles-strings';

const routes: Routes = [
  { path : '', component : UnidadesTransporteAdministracionPage, title: 'Administración de unidades de transporte', canActivate: [UsuarioGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesTransporteRoutingModule { }
