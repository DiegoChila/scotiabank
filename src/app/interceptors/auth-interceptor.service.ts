import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("/auth/")) {
      return next.handle(req);
    } else {
      const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('user')}`});
      const reqClone = req.clone({
        headers: headers
      });
      return next.handle(reqClone);
    }
  }
}
