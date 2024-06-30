import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { UsuarioStateService } from '../services/usuario-state.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate, CanMatch {

  constructor(private readonly usuarioStateService: UsuarioStateService, private readonly router: Router) { }
  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.permitirAcceso(route);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.permitirAcceso(route);
  }
  private permitirAcceso(route: Route | ActivatedRouteSnapshot) {
    const usuario = this.usuarioStateService.obtenerUsuarioActualLocalStorage();
    const navegarAInicioSesion = () => this.router.navigateByUrl('/Usuario/IniciarSesion').then(() => false);
    const navegarAAccesoDenegado = () => this.router.navigateByUrl('/AccesoDenegado').then(() => false);
    if (!usuario) {
      return navegarAInicioSesion();
    }
    if (route.data) {
      if (typeof route.data['roles'] === 'string' && usuario.Rol?.toLowerCase().trim() !== route.data['roles'].toLowerCase().trim()) {
        return navegarAAccesoDenegado();
      }
      else if (Array.isArray(route.data['roles']) && !(route.data['roles']).includes(usuario.Rol)) {
        return navegarAAccesoDenegado();
      }
    }
    return true;
  }
}
