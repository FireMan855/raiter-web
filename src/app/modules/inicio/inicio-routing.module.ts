import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticaDevolucionesPage } from './pages/politica-devoluciones/politica-devoluciones.page';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';
import { AccesoDenegadoComponent } from './pages/acceso-denegado/acceso-denegado.component';
import { CatalogosPage } from './pages/catalogos/catalogos.page';
import { InicioPage } from './pages/inicio/inicio.page';
import { RolesStrings } from '../../shared/store/usuario-raiter/roles-strings';
import { UsuarioGuard } from '../../shared/guards/usuario-guard.service';

const routes: Routes = [
  {
    path: 'PoliticaDevoluciones',
    component: PoliticaDevolucionesPage,
    title: 'Politica de devoluciones'
  },
  {
    path: 'PaginaNoEncontrada',
    component: PaginaNoEncontradaComponent,
    title: 'Página no encontrada',
    //canActivate : [UsuarioGuard],
  },
  {
    path: 'AccesoDenegado',
    component: AccesoDenegadoComponent,
    title: 'Acceso denegado',
    //canActivate : [UsuarioGuard],
  },
  {
    path: 'Catalogos',
    component: CatalogosPage,
    title: 'Catálogos',
    data: { roles : [RolesStrings.Administrador] },
    canActivate : [UsuarioGuard],
  },
  {
    path: '',
    component: InicioPage,
    title: 'Inicio',
    //canActivate : [UsuarioGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
