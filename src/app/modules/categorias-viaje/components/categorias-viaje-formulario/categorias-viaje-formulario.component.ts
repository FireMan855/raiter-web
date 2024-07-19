import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { base64Url, raiterDefaultImage } from '../../../../shared/utils/base64-utils';
import { ObtenerCategoriasViajePadreRespuesta, RegistrarCategoriaViajePeticion, RespuestaGuardadoArchivoTemporal } from '../../../../shared/services/raiter-api-client.service';
import { NotificacionService } from '../../../../shared/services/notificacion.service';
import { DxTextBoxComponent, DxValidatorComponent } from 'devextreme-angular';
import { environment } from '../../../../../environments/environment.development';
import { UploadedEvent } from 'devextreme/ui/file_uploader';

@Component({
  selector: 'app-categorias-viaje-formulario',
  templateUrl: './categorias-viaje-formulario.component.html',
  styleUrl: './categorias-viaje-formulario.component.css'
})
export class CategoriasViajeFormularioComponent {

  imagenSrc = raiterDefaultImage;

  model: RegistrarCategoriaViajePeticion = this.generarModeloVacio();

  @Input() soloLectura: boolean = false;
  @Input() nombreCategoriaViajePadre? : string = '';
  @Input() set modelEditar(model: ObtenerCategoriasViajePadreRespuesta | undefined) {
    if (model) {
      this.model.Nombre = model.Nombre!;
      this.model.Descripcion = model.Descripcion;
      this.model.RequiereAlto = model.RequiereAlto;
      this.model.RequiereAncho = model.RequiereAncho;
      this.model.RequiereLargo = model.RequiereLargo;
      this.model.RequierePeso = model.RequierePeso;
      this.model.RequiereTemperatura = model.RequiereTemperatura;
      if (model.ImagenCategoriaBase64) {
        this.imagenSrc = `${base64Url}${model.ImagenCategoriaBase64}`;
      }
      else {
        this.imagenSrc = raiterDefaultImage;
      }
    }
    else {
      this.model = this.generarModeloVacio();
      this.imagenSrc = raiterDefaultImage;
    }
  }
  @Output() onSalirEmitter = new EventEmitter();
  @Output() onGuardarEmitter = new EventEmitter<RegistrarCategoriaViajePeticion>();
  @ViewChild('txtNombreCategoriaValidador') txtNombreCategoriaValidador!: DxValidatorComponent

  dxFileUploaderOptions = {
    urlUploader: `${environment.baseUrl}CategoriaViajeImagen/SubirCategoriaViajeImagenTemporal`,
    onUploaded: (evt: UploadedEvent) => {
      var objeto: RespuestaGuardadoArchivoTemporal = JSON.parse(evt.request.response);
      this.model.NombreImagenCategoriaViaje = objeto.NombreArchivo;
      this.imagenSrc = `${base64Url}${objeto.ArchivoBase64}`;
    }
  }

  constructor(private readonly notificacionService: NotificacionService) { }

  salir() {
    if (!this.soloLectura) {
      this.notificacionService.mostrarConfirmacionSalida().then(response => {
        if (response) {
          this.onSalirEmitter.emit();
        }
      })
    } else {
      this.onSalirEmitter.emit();
    }
  }
  guardar() {
    if (!this.txtNombreCategoriaValidador.instance.validate().isValid) {
      return
    }
    this.onGuardarEmitter.emit(this.model)
  }

  private generarModeloVacio(): RegistrarCategoriaViajePeticion {
    return {
      EsContenedor: false,
      EsIndefinido: false,
      Nombre: '',
      RequiereAlto: false,
      RequiereAncho: false,
      RequiereLargo: false,
      RequierePeso: false,
      RequiereTemperatura: false,
      Descripcion: '',
    }
  }

}
