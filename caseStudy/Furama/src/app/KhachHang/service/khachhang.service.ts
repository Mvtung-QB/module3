import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KhachhangService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/KhachHang';

  getAllKhachHang(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  seach(keyword: string): Observable<any> {
    return this.http.get(this.baseUrl + '?search=' + keyword);
  }

  createKhachHang(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteKhachHang(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  updateKhachHang(id: string, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + id, obj);
  }
  getKhachHang(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
