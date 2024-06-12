import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { DevextremeloginModule } from '../../shared/modules/devextremelogin/devextremelogin.module';
import { BoostrapSharedModule } from '../../shared/modules/boostrap-shared/boostrap-shared.module';
import { RecuperarContraseniaPage } from './pages/recuperar-contrasenia/recuperar-contrasenia.page';
import { ConfirmarEmailPage } from './pages/confirmar-email/confirmar-email.page';
import { ReestablecerContraseniaPage } from './pages/reestablecer-contrasenia/reestablecer-contrasenia.page';
import { FormularioSharedModule } from '../../shared/modules/formulario-shared/formulario-shared.module';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarUsuarioComponent,
    RecuperarContraseniaPage,
    ConfirmarEmailPage,
    ReestablecerContraseniaPage
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    DevextremeloginModule,
    BoostrapSharedModule,
    FormularioSharedModule  
  ]
})
export class AutenticacionModule { }
