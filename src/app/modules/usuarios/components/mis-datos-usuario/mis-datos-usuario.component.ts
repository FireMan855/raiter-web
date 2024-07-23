import { Component, Input } from '@angular/core';
import { MisDatosUsuarioModel } from '../../models/mis-datos-usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos-usuario',
  templateUrl: './mis-datos-usuario.component.html',
  styleUrl: './mis-datos-usuario.component.css'
})
export class MisDatosUsuarioComponent {

  private model : MisDatosUsuarioModel = this.generarModeloVacio();

  @Input()
  get modelMostrar(){
    return this.model
  }
  set modelMostrar(input){
    if(input){
      this.model = input
    }
    else{
      this.model = this.generarModeloVacio();
    }
  }
  constructor(private readonly router: Router){}

  private generarModeloVacio() : MisDatosUsuarioModel{
    return {
      Email: undefined,
      PhoneNumber : undefined,
      Rol: undefined,
      UserName: undefined
    }
  }
  editarMisDatos(){
    this.router.navigateByUrl('/Usuarios/EditarMisDatos');
  }
  cambiarContrasenia(){
    this.router.navigateByUrl('/Usuarios/CambiarMiContrasenia');
  }

}
