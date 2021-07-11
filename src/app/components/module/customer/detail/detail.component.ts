import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetailCustomer } from 'src/app/models/detail-customer';
import { DetailCustomerDto } from 'src/app/models/detail-customer-dto';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  customerId: string = '';

  detailCustomer: DetailCustomer = new DetailCustomer(0, '', '', '', '', '');

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params.customerId;
    if (isNaN(parseInt(this.customerId))) {
      localStorage.removeItem('user');
      this.router.navigateByUrl("/login");
    }

    this.detailCustomer.setCustomerId(parseInt(this.customerId));

    this.customerService.getDetail(this.customerId).subscribe(
      (response: any) => {
        const detailCustomerDto: DetailCustomerDto = response;
        if (detailCustomerDto.success) {
          this.detailCustomer = detailCustomerDto.detailCustomer;
        }
      },
      (error: any) => {
        localStorage.clear();
        this.router.navigateByUrl('/login');
        this.viewError('Ha ocurrido un error, por favor inicie sesión');
      }
    );
  }

  onSubmit() {
    this.customerService.saveDetail(this.detailCustomer).subscribe(
      (response: any) => {
        const detailCustomerDto: DetailCustomerDto = response;
        if (detailCustomerDto.success) {
          Swal.fire({
            icon: `success`,
            html: 'Datos actualizados',
            showConfirmButton: false,
            timer: 2500
          });
        } else {
          let errorData = '';
          detailCustomerDto.errors.forEach(error => {
            errorData += `${error} <br>`;
          });
          this.viewError(errorData);
        }
      },
      (error: any) => {
        localStorage.clear();
        this.router.navigateByUrl('/login');
        this.viewError('Ha ocurrido un error, por favor inicie sesión');
      }
    );
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
