import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { UploadedEvent } from 'devextreme/ui/file_uploader';
import validationEngine from 'devextreme/ui/validation_engine';
import { RegistrarSustanciaPeligrosaPeticion, SustanciaPeligrosaRespuesta } from '../../../../shared/services/raiter-api-client.service';
import { base64Url, raiterDefaultImage } from '../../../../shared/utils/base64-utils';
import { NotificacionService } from '../../../../shared/services/notificacion.service';

@Component({
  selector: 'app-sustancias-peligrosas-formulario',
  templateUrl: './sustancias-peligrosas-formulario.component.html',
  styleUrl: './sustancias-peligrosas-formulario.component.css'
})
export class SustanciasPeligrosasFormularioComponent {

  @Input() soloLectura = false;

  @Output() salirEmitter = new EventEmitter<void>();
  @Output() guardarEmitter = new EventEmitter<RegistrarSustanciaPeligrosaPeticion>();

  model: RegistrarSustanciaPeligrosaPeticion = {
    RequiereDescripcion: false,
    RequiereTemperatura: false,
    Clave: '',
    Descripcion: '',
    Nombre: '',
  }
  urlImagen = raiterDefaultImage

  readonly vgSustanciaPeligrosa = 'vgSustanciaPeligrosa';

  @Input()
  set modelEditar(input: SustanciaPeligrosaRespuesta) {
    if (input) {
      this.model.Clave = input.Clave;
      this.model.Nombre = input.Nombre;
      this.model.Descripcion = input.Descripcion;
      this.model.RequiereDescripcion = input.RequiereDescripcion;
      this.model.RequiereTemperatura = input.RequiereTemperatura;
      if (input.ImagenBase64) {
        this.urlImagen = `${base64Url}${input.ImagenBase64}`;
      }
      else {
        this.urlImagen = raiterDefaultImage
      }
    }
  }

  dxFileUploaderOptions = {
    urlUploader: `${environment.baseUrl}SustanciaPeligrosaImagen/SubirImagenSustanciaPeligrosaTemporal`,
    onUploaded: (evt: UploadedEvent) => {
      var objeto = JSON.parse(evt.request.response);
      this.model.NombreImagenSustanciaPeligrosa = objeto.NombreArchivo;
      this.urlImagen = `${base64Url}${objeto.ImagenBase64}`;
    }
  }
  constructor(private readonly notificacionService: NotificacionService) { }
  onSalirClick() {
    if (!this.soloLectura) {
      this.notificacionService.mostrarConfirmacionSalida().then((response) => {
        if (response) {
          this.salirEmitter.emit();
        }
      });
    }
    else {
      this.salirEmitter.emit();
    }
  }
  onGuardarClick() {
    if (!validationEngine.validateGroup(this.vgSustanciaPeligrosa).isValid) {
      return
    }
    this.guardarEmitter.emit(this.model);
  }
}
