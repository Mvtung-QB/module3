import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/NhanVien';

  getAllNhanVien(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createNhanVien(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteNhanVien(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  updateNhanVien(id: string, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + id, obj);
  }
  getNhanVien(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
