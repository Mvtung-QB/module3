import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DichvuService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/DichVu';

  getAllDichVu(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  seach(keyword: string): Observable<any> {
    return this.http.get(this.baseUrl + '?search=' + keyword);
  }

  createDichVu(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteDichVu(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  updateDichVu(id: string, obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + id, obj);
  }
  getDichVu(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
