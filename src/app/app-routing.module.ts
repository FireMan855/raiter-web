import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { UsuarioGuard } from './shared/guards/usuario-guard.service';

const routes: Routes = [
  {
    path: 'Usuario',
    component: LoginLayoutComponent,
    loadChildren: () => import('../app/modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('../app/modules/inicio/inicio.module').then(m => m.InicioModule),
    canMatch: [UsuarioGuard]
  }
  /*{
    path:'',
    component: MainLayoutComponent,
    title: 'Inicio'
  },*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
