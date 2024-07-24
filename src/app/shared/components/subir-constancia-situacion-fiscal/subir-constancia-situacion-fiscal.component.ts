import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DxButtonModule, DxFileUploaderModule } from 'devextreme-angular';
import { base64Url, raiterDefaultImage } from '../../utils/base64-utils';
import { UploadedEvent } from 'devextreme/ui/file_uploader';
import { NotificacionService } from '../../services/notificacion.service';
import { environment } from '../../../../environments/environment.development';
import { ConstanciaSituacionFiscalClient } from '../../services/raiter-api-client.service';
import { LoadPanelService } from '../../services/load-panel.service';
import { ApiArea } from '../../services/raiter-api-client.utils';
import saveAs from 'file-saver';

@Component({
  selector: 'app-subir-constancia-situacion-fiscal',
  standalone: true,
  imports: [CommonModule, DxFileUploaderModule, DxButtonModule],
  templateUrl: './subir-constancia-situacion-fiscal.component.html',
  styleUrl: './subir-constancia-situacion-fiscal.component.css'
})
export class SubirConstanciaSituacionFiscalComponent implements OnChanges {

  @Input() soloLectura: boolean = false;
  @Input() usuarioId?: string;
  @Input() set nombreUsuario(nombre : string){
    this.model.nombreUsuario = nombre
  }

  model = {
    nombreArchivo: '',
    extension: '',
    base64: '',
    nombreUsuario: '',
    imagenMostrar: raiterDefaultImage
  }
  dxFileUploaderOptions = {
    uploadUrl: `${environment.baseUrl}ConstanciaSituacionFiscal/SubirConstanciaSituacionFiscal`,
    onUploaded: (e: UploadedEvent) => {
      var objeto = JSON.parse(e.request.response);
      this.model.base64 = objeto.ArchivoBase64;
      this.model.nombreArchivo = objeto.NombreArchivo;
      this.model.extension = objeto.Extension;
      if ([".jpg", ".jpeg", ".bmp", ".png", ".JPG", ".JPEG", ".BMP", ".PNG"].map(function (s) { return s.replace('.', '') }).indexOf(objeto.Extension) !== -1) {
        this.model.imagenMostrar = base64Url + objeto.ArchivoBase64;
        //$("#marcoConstanciaFiscal").attr("src", 'data:image/png;base64,' + objeto.ArchivoBase64);
        //$('#linkConstanciaFiscal').attr('href', 'data:image/png;base64,' + objeto.ArchivoBase64);
        //constanciaSituacionFiscal.Base64 = 'data:image/png;base64,' + objeto.ArchivoBase64;
        //constanciaSituacionFiscal.NombreArchivo = objeto.NombreArchivo;
      }
      else {
        this.model.imagenMostrar = '/assets/imagenes/pdf-4919559_960_720.png';
        //$("#marcoConstanciaFiscal").attr("src", "/imagenes/pdf-4919559_960_720.png");
        //$('#linkConstanciaFiscal').attr('href', 'data:application/pdf;base64,' + objeto.ArchivoBase64);
        //constanciaSituacionFiscal.Base64 = 'data:application/pdf;base64,' + objeto.ArchivoBase64;
        //constanciaSituacionFiscal.NombreArchivo = objeto.NombreArchivo;
      }
      this.notificacionService.success('Su archivo de constancia fiscal se ha subido correctamente');
    }
  }
  constructor(private readonly notificacionService: NotificacionService,
    private readonly constanciaClient: ConstanciaSituacionFiscalClient) {
    this.obtenerConstancia();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuarioId']) {
      this.obtenerConstancia();
      console.log(this.model.imagenMostrar)
    }
  }
  obtenerConstancia() {
    let observable = this.usuarioId ? this.constanciaClient.obtenerConstanciaActualUsuario(this.usuarioId, ApiArea) :
      this.constanciaClient.obtenerConstanciaActual(ApiArea);
    observable.subscribe(response => {
      if (response) {
        this.model.base64 = response.Base64!;
        this.model.extension = response.Extension!;
        this.model.nombreArchivo = response.NombreArchivo!;
        if (response.Base64) {
          if (response.Extension !== 'pdf')
            this.model.imagenMostrar = base64Url + response.Base64;
          else {
            this.model.imagenMostrar = '/assets/imagenes/pdf-4919559_960_720.png';
          }
        }
        else{
          this.model.imagenMostrar = raiterDefaultImage;
        }
      }
      else {
        this.notificacionService.warninig('No se pudo recuperar la constancia actual');
      }
    });
  }
  descargarConstancia() {
    const byteCharacters = atob(this.model.base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    saveAs(new Blob(byteArrays, { type: 'application/octet-stream' }), `${new Date().getTime().toString()}` + `.${this.model.extension}`);

  }
}
