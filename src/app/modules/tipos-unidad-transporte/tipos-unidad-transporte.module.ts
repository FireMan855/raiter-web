import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposUnidadTransporteRoutingModule } from './tipos-unidad-transporte-routing.module';
import { TiposUnidadTransporteAdministracionComponent } from './pages/tipos-unidad-transporte-administracion/tipos-unidad-transporte-administracion.component';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';
import { TiposUnidadTransporteRegistrarComponent } from './pages/tipos-unidad-transporte-registrar/tipos-unidad-transporte-registrar.component';
import { TiposUnidadTransporteEditarComponent } from './pages/tipos-unidad-transporte-editar/tipos-unidad-transporte-editar.component';
import { TiposUnidadTransporteFormularioComponent } from './components/tipos-unidad-transporte-formulario/tipos-unidad-transporte-formulario.component';


@NgModule({
  declarations: [
    TiposUnidadTransporteAdministracionComponent,
    TiposUnidadTransporteRegistrarComponent,
    TiposUnidadTransporteEditarComponent,
    TiposUnidadTransporteFormularioComponent
  ],
  imports: [
    CommonModule,
    DevextrememainModule,
    TiposUnidadTransporteRoutingModule,
  ]
})
export class TiposUnidadTransporteModule { }
