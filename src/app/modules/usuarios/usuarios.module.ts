import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosAdministracionComponent } from './pages/usuarios-administracion/usuarios-administracion.component';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';


@NgModule({
  declarations: [
    UsuariosAdministracionComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DevextrememainModule
  ]
})
export class UsuariosModule { }
