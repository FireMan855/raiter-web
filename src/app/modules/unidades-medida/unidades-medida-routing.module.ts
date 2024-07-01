import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnidadesMedidaAdministracionPage } from "./pages/unidades-medida-administracion/unidades-medida-administracion.page";
const routes : Routes = [
    {
        path: '',
        title: 'Unidades de medida',
        component : UnidadesMedidaAdministracionPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UnidadesMedidaRoutingModule{

}  