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
import { SubirConstanciaSituacionFiscalComponent } from '../../shared/components/subir-constancia-situacion-fiscal/subir-constancia-situacion-fiscal.component';
import { DetallesUsuarioPage } from './pages/detalles-usuario/detalles-usuario.page';
import { UsuariosFormularioAdministracionComponent } from './components/usuarios-formulario-administracion/usuarios-formulario-administracion.component';
import { MisNotificacionesPage } from './pages/mis-notificaciones/mis-notificaciones.page';
import { DateFromNowPipe } from '../../shared/pipes/date-from-now.pipe';


@NgModule({
  declarations: [
    UsuariosAdministracionComponent,
    MiCuentaPage,
    InformacionInteresComponent,
    MisDatosUsuarioComponent,
    EditarMisDatosComponent,
    CambiarContraseniaPage,
    DetallesUsuarioPage,
    UsuariosFormularioAdministracionComponent,
    MisNotificacionesPage
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DevextrememainModule,
    SubirConstanciaSituacionFiscalComponent,
    DateFromNowPipe
  ]
})
export class UsuariosModule { }
