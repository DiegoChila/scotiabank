import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(customer: Customer) {
    return this.http.post(`${this.apiUrl}/auth/login`, customer);
  }

  register(customer: Customer) {
    return this.http.post(`${this.apiUrl}/auth/register`, customer);
  }
}
