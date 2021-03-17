import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  errorMessage: any;
  constructor(private dataService : DataService){}
  
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        console.log('INTERCEPTOR');
        if (err) {
          switch (err.status) {
            case 0:
              this.errorMessage = err.statusText;
              console.log('Inside Case 0');
              console.log(err.statusText);
              this.dataService.setError(this.errorMessage);
              console.log(err.message);
              console.log(err.error.type);
              break;
            case 400:
                console.log(err.error);
                
              break;
          }
        }
        return throwError(err);
      })
    );
  }
}
