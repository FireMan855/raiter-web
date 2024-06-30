import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginLayoutComponent } from "../../shared/layouts/login-layout/login-layout.component";
import { IniciarSesionComponent } from "./pages/iniciar-sesion/iniciar-sesion.component";
import { RegistrarUsuarioComponent } from "./pages/registrar-usuario/registrar-usuario.component";
import { RecuperarContraseniaPage } from "./pages/recuperar-contrasenia/recuperar-contrasenia.page";
import { ConfirmarEmailPage } from "./pages/confirmar-email/confirmar-email.page";
import { ReestablecerContraseniaPage } from "./pages/reestablecer-contrasenia/reestablecer-contrasenia.page";

const routes : Routes = [
    {
        path: 'IniciarSesion',
        component: IniciarSesionComponent,
        title: 'Iniciar sesión'
      },
      {
        path: 'RegistrarUsuario',
        component: RegistrarUsuarioComponent,
        title: 'Registro'
      },
      {
        path: 'RecuperarContrasenia',
        component: RecuperarContraseniaPage,
        title: 'Recuperar contraseña'
      },
      {
        path: 'ConfirmarEmail',
        component: ConfirmarEmailPage,
        title: 'Confirmar e-mail'
      },
      {
        path: 'RestablecerContrasenia',
        component: ReestablecerContraseniaPage,
        title: 'Restablecer contraseña'
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AutenticacionRoutingModule{

}