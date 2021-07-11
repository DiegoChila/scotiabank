import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer: Customer = new Customer(0 , '', '');

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('user') ? localStorage.getItem('user') : "";
    if (token != "") {
      this.router.navigateByUrl('/detail');
    }
  }

  onSubmit() {
    this.authService.login(this.customer).subscribe(
      (response: any) => {
        const loginDto : Login = response;
        if (loginDto.success) {
          localStorage.setItem('user', loginDto.token);
          this.router.navigateByUrl(`/detail/${loginDto.customerId}`);
        } else {
          let errorData = '';
          loginDto.errors.forEach(error => {
            errorData += `${error} <br>`;
          });
          this.viewError(errorData);
        }
      },
      (error: any) => {
        this.viewError('Ha ocurrido un error');
      }
    )
  }

  viewError(data: string) {
    Swal.fire({
      icon: `error`,
      html: data,
      showConfirmButton: false,
      timer: 2500
    });
  }

}
