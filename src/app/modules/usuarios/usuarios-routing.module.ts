import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosAdministracionComponent } from './pages/usuarios-administracion/usuarios-administracion.component';

const routes: Routes = [
  { path: '', component: UsuariosAdministracionComponent, title: 'Administración de usuarios'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
