import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PoliticaDevolucionesPage } from './pages/politica-devoluciones/politica-devoluciones.page';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';
import { AccesoDenegadoComponent } from './pages/acceso-denegado/acceso-denegado.component';
import { CatalogosPage } from './pages/catalogos/catalogos.page';
import { InicioPage } from './pages/inicio/inicio.page';


@NgModule({
  declarations: [
    PoliticaDevolucionesPage,
    PaginaNoEncontradaComponent,
    AccesoDenegadoComponent,
    CatalogosPage,
    InicioPage,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
