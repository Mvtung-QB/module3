import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/Booking';

  getAllBooking(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  seach(keyword: string): Observable<any> {
    return this.http.get(this.baseUrl + '?search=' + keyword);
  }

  booking(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  updateDichVu(id: string, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + id , obj);
  }
}
