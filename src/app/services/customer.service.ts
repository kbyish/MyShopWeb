import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customers.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5143/api/Customers';

//http://localhost:5143/api/Customers/GetCustomers
//http://localhost:5143/api/Customers/GetCustomerById?Id=3


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}/GetCustomers`);
  }

  get(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${baseUrl}/GetCustomerById/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}?title=${title}`);
  }
}
