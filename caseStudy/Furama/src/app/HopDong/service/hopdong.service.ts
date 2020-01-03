import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopdongService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/HopDong';

  getAllHopDong(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  seach(keyword: string): Observable<any> {
    return this.http.get(this.baseUrl + '?search=' + keyword);
  }

  createHopDong(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteHopDong(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getHopDOng(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
