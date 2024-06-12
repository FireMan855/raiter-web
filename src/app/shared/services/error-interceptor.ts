import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import notify from 'devextreme/ui/notify';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.error instanceof Blob) {
                    err.error.text().then(t => {
                        let errorObject = JSON.parse(t);
                        console.log(errorObject)
                        if (errorObject && errorObject.Mensaje)
                            notify(errorObject.Mensaje.replaceAll("\r\n", "<br>") + (errorObject.Detalles ? "<br>" + errorObject.Detalles : ""), "error", 5000);
                        else
                            notify(!errorObject || errorObject === '' || errorObject === undefined ? 'Error no especificado, vea la consola de errores. [' + err.status + ' - ' + err.statusText + ']' : errorObject.ExceptionMessage ? errorObject.ExceptionMessage.replaceAll("\r\n", "<br>") : errorObject.Message, "error", 5000);
                    });
                }
                else{
                    notify(err.message, "error", 5000);
                }
                //DevExpress.ui.notify(errorObject.Mensaje.replaceAll("\r\n", "<br>") + (errorObject.Detalles ? "<br>" + errorObject.Detalles : ""), "error",5000);

                return throwError(() => err);
            })
        );
    }

}
