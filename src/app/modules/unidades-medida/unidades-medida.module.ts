import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevextrememainModule } from '../../shared/modules/devextrememain/devextrememain.module';
import { UnidadesMedidaRoutingModule } from './unidades-medida-routing.module';
import { UnidadesMedidaAdministracionPage } from './pages/unidades-medida-administracion/unidades-medida-administracion.page';
import { UnidadesMedidaFormularioComponent } from './components/unidades-medida-formulario/unidades-medida-formulario.component';



@NgModule({
  declarations: [
  
    UnidadesMedidaAdministracionPage,
       UnidadesMedidaFormularioComponent
  ],
  imports: [
    CommonModule,
    UnidadesMedidaRoutingModule,
    DevextrememainModule
  ]
})
export class UnidadesMedidaModule { }
