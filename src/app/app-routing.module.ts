import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent
  },
  {
    path: '',
    component: LoginLayoutComponent,
    loadChildren: () => import('../app/modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
