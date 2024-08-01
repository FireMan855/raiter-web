import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MainMenuComponent } from './shared/layouts/components/main-menu/main-menu.component';
import { LoggedUserComponent } from './shared/layouts/components/logged-user/logged-user.component';
import { TitleStrategy } from '@angular/router';
import { TituloPaginaService } from './shared/services/titulo-pagina.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './shared/services/error-interceptor';
import { Store, StoreModule } from '@ngrx/store';
import { loadPanelReducer } from './shared/store/load-panel/load-panel.reducers';
import { DxLoadPanelModule } from 'devextreme-angular';
import { usuarioReducer } from './shared/store/usuario-raiter/usuario-raiter.reducers';
import { UsuarioStateService } from './shared/services/usuario-state.service';
import { LoadPanelGeneralComponent } from './shared/components/load-panel-general/load-panel-general.component';
import { BotonNotificacionesComponent } from "./shared/layouts/components/boton-notificaciones/boton-notificaciones.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    MainMenuComponent,
    LoggedUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxLoadPanelModule,
    LoadPanelGeneralComponent,
    StoreModule.forRoot({ loadPanelGeneral: loadPanelReducer, usuario: usuarioReducer }),
    BotonNotificacionesComponent
],
  providers: [{
    provide: TitleStrategy,
    useClass: TituloPaginaService
  },
  {
    provide: APP_INITIALIZER,
    deps: [UsuarioStateService],
    useFactory: (service : UsuarioStateService) => {
      let realOpenXMLHttpRequest = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(type, url) {
        let res = realOpenXMLHttpRequest.apply(this, arguments as any);
        let usuarioAutenticado = service.obtenerUsuarioActualLocalStorage();
        if(usuarioAutenticado && usuarioAutenticado.Token){
          this.setRequestHeader('Authorization', 'Bearer ' + usuarioAutenticado.Token);
        }
        return res;
      }

    }
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
