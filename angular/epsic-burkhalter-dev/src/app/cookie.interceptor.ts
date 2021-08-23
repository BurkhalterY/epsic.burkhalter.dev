import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*const ci_session = sessionStorage.getItem('ci_session');
    console.log(ci_session);
    request = request.clone({
      setHeaders: {
        Cookie: `ci_session=${ci_session}`
      }
    });*/
    return next.handle(request);
  }
}
