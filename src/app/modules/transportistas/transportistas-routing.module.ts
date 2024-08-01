import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportistasAdministracionPage } from './pages/transportistas-administracion/transportistas-administracion.page';
import { RolesStrings } from '../../shared/store/usuario-raiter/roles-strings';
import { UsuarioGuard } from '../../shared/guards/usuario-guard.service';

const routes: Routes = [
  {
    path: '', component: TransportistasAdministracionPage, title: 'Administración de transportistas',
    data: { roles: [RolesStrings.Administrador]}, canActivate : [UsuarioGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportistasRoutingModule { }
