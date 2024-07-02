import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { environment } from '../../../../../environments/environment.development';
import validationEngine from 'devextreme/ui/validation_engine';
import { TipoUnidadTransporteFormulario } from '../../models/tipo-unidad-transporte-formulario.interface';

@Component({
  selector: 'app-tipos-unidad-transporte-formulario',
  templateUrl: './tipos-unidad-transporte-formulario.component.html',
  styleUrl: './tipos-unidad-transporte-formulario.component.css'
})
export class TiposUnidadTransporteFormularioComponent {
  readonly tiposDataSource = `${environment.baseUrl}TipoUnidadTransporte/ObtenerTiposTransporteCombo`
  readonly vgFormulario = 'vgFormulario'
  private _model: TipoUnidadTransporteFormulario = {
    Nombre: '',
    Descripcion: '' ,
    RequiereAlto: false,
    RequiereAncho: false,
    RequiereLargo: false,
    RequierePeso: false,
    RequiereSustanciaPeligrosa : false,
    RequiereTemperatura: false
  };
  @Input()
  get model() {
    return this._model;
  }
  set model(input) {
    if (input) {
      this._model = { ...input};
      /*this._model.Id = input.Id;
      this._model.Nombre = input.Nombre;
      this._model.Descripcion = input.Descripcion;
      this._model.Tipo = input.Tipo;
      this._model.RequiereAlto = input.RequiereAlto;
      this._model.RequiereAncho = input.RequiereAncho;
      this._model.RequiereLargo = input.RequiereLargo;
      this._model.RequierePeso = input.RequierePeso;
      this._model.RequiereSustanciaPeligrosa = input.RequiereSustanciaPeligrosa;
      this._model.RequiereTemperatura = input.RequiereTemperatura;*/
    }
  }
  @Output() onSalir = new EventEmitter();
  @Output() onGuardar = new EventEmitter<TipoUnidadTransporteFormulario>();
  constructor(private readonly notificacionService: NotificacionService) { }
  onSalirClick() {
    this.notificacionService.mostrarConfirmacionSalida().then((response) => {
      if (response) {
        this.onSalir.emit();
      }
    })
  }
  onGuardarClick(){
    if(!validationEngine.validateGroup(this.vgFormulario).isValid){
      return;
    }
    this.onGuardar.emit(this.model);
  }
}
