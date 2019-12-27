import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/customer';

  getAllCustomer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createCustomer(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post(this.baseUrl, obj);
  }
}
