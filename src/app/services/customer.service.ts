import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetailCustomer } from '../models/detail-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetail(customerId: string) {
    return this.http.get(`${this.apiUrl}/details/${customerId}`)
  }

  saveDetail(detailCustomer: DetailCustomer) {
    return this.http.post(`${this.apiUrl}/details`, detailCustomer);
  }
}
