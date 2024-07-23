import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosAdministracionComponent } from './pages/usuarios-administracion/usuarios-administracion.component';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';
import { MiCuentaPage } from './pages/mi-cuenta/mi-cuenta.page';
import { InformacionInteresComponent } from './components/informacion-interes/informacion-interes.component';
import { MisDatosUsuarioComponent } from './components/mis-datos-usuario/mis-datos-usuario.component';
import { EditarMisDatosComponent } from './pages/editar-mis-datos/editar-mis-datos.component';
import { CambiarContraseniaPage } from './pages/cambiar-contrasenia/cambiar-contrasenia.page';


@NgModule({
  declarations: [
    UsuariosAdministracionComponent,
    MiCuentaPage,
    InformacionInteresComponent,
    MisDatosUsuarioComponent,
    EditarMisDatosComponent,
    CambiarContraseniaPage
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DevextrememainModule
  ]
})
export class UsuariosModule { }
