import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token: any = localStorage.getItem('user') ? localStorage.getItem('user') : "";
      if (token != "") {
        return true;
      } else {
        Swal.fire({
          icon: `error`,
          html: 'Por favor inicia sesion',
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigateByUrl('/login');
        return false;
      }
  }

}
