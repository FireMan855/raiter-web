import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosAdministracionComponent } from './pages/usuarios-administracion/usuarios-administracion.component';
import { RolesStrings } from '../../shared/store/usuario-raiter/roles-strings';
import { MiCuentaPage } from './pages/mi-cuenta/mi-cuenta.page';
import { UsuarioGuard } from '../../shared/guards/usuario-guard.service';
import { EditarMisDatosComponent } from './pages/editar-mis-datos/editar-mis-datos.component';
import { CambiarContraseniaPage } from './pages/cambiar-contrasenia/cambiar-contrasenia.page';

const routes: Routes = [
  { path: '', component: UsuariosAdministracionComponent, title: 'Administración de usuarios', data : {roles : [RolesStrings.Administrador]}, canActivate: [UsuarioGuard]},
  { path: 'MiCuenta', component: MiCuentaPage, title: 'Mi cuenta'},
  { path: 'EditarMisDatos', component: EditarMisDatosComponent, title: 'Editar mis datos'},
  { path: 'CambiarMiContrasenia', component: CambiarContraseniaPage, title: 'Cambiar contraseña'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
