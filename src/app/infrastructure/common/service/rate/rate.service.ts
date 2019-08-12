import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from '../../models/rate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {


  baseUrl = 'http://localhost:3000/rate';
  constructor(private http: HttpClient) {
  }

  get(): Observable<Rate[]> {
    return this.http
      .get<Rate[]>(this.baseUrl);
  }

  add(rate: Rate): Observable<Rate> {
    return this.http
      .post<Rate>(this.baseUrl, rate);
  }


  edit(rate: Rate): Observable<Rate> {
    const url = `${this.baseUrl}/${rate.id}`;
    return  this.http.put(url, rate);
}


delete(rate: Rate): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${rate.id}`);
}


}
