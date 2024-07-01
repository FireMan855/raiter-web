import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditarUnidadMedidaPeticion, RegistrarUnidadMedidaPeticion } from '../../../../shared/services/raiter-api-client.service';
import validationEngine from 'devextreme/ui/validation_engine';
import { Observable, from, of } from 'rxjs';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-unidades-medida-formulario',
  templateUrl: './unidades-medida-formulario.component.html',
  styleUrl: './unidades-medida-formulario.component.css'
})
export class UnidadesMedidaFormularioComponent {
  /**
   * Indica si el formulario es de sólo lectura para no permitir su modificación
   */
  @Input() soloLectura = false;
  private _model: RegistrarUnidadMedidaPeticion = {
    Nombre: '',
    Descripcion: '',
    Abreviacion: '',
  }
  /**
   * Id de de la unidad de medida a editar, en caso de abrir el formulario para editar una unidad de media
   */
  @Input() unidadMedidaId?: string
  /**
   * Modelo recibido para mostrar en el formulario
   */
  @Input()
  get model() {
    return this._model;
  }
  set model(input: RegistrarUnidadMedidaPeticion) {
    if (input) {
      this.model.Nombre = input.Nombre;
      this.model.Abreviacion = input.Abreviacion;
      this.model.Descripcion = input.Descripcion;
    }
    else {
      this.reset();
    }
  }
  /**
   * Evento que indica que se está saliendo del formulario
   */
  @Output() onSalir = new EventEmitter<void>();
  /**
   * Evento que indica que se envió a guardar/editar una unidad de medida
   */
  @Output() onGuardar = new EventEmitter<RegistrarUnidadMedidaPeticion | EditarUnidadMedidaPeticion>();
  /**
   * Nombre del grupo DevExtreme para validar el formulario
   */
  readonly vgFormulario = 'vgFormulario';
  constructor(private readonly notificacionService : NotificacionService){}
  /**
   * Método para cerrar el formulario de unidades de medida
   */
  onSalirClick() {
    let responseObservable : Observable<boolean>
    if(!this.soloLectura){
      responseObservable = from(this.notificacionService.mostrarConfirmacionSalida());
    }
    else{
      responseObservable = of(true);
    }
    responseObservable.subscribe(res => {
      if(res){
        this.onSalir.emit();
        this.reset();
      }
    })

  }
  /**
   * Elimina los datos ingresados en el formulario y el id de la unidad
   */
  reset() {
    this.unidadMedidaId = undefined;
    validationEngine.resetGroup(this.vgFormulario);
  }
  onGuardarClick(){
    if(!validationEngine.validateGroup(this.vgFormulario).isValid){
      return
    }
    this.onGuardar.emit({
      UnidadMedidaId: this.unidadMedidaId,
      Abreviacion: this.model.Abreviacion,
      Descripcion: this.model.Descripcion,
      Nombre: this.model.Nombre
    })
  }
}
