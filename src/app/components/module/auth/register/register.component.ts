import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { NewCustomer } from 'src/app/models/new-customer';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    this.authService.register(this.customer).subscribe(
      (response: any) => {
        const newCostumer: NewCustomer = response;
        if (newCostumer.success) {
          Swal.fire({
            icon: `success`,
            html: 'Usuario registrado',
            showConfirmButton: false,
            timer: 2500
          });
          this.router.navigateByUrl('/login');
        } else {
          let errorData = '';
          newCostumer.errors.forEach(error => {
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
