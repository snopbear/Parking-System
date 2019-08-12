import { Category } from 'src/app/infrastructure/common/models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000/category';
  constructor(private http: HttpClient) {
  }

  get(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.baseUrl);
  }

  add(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.baseUrl, category);
  }


  edit(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/${category.id}`;
    return  this.http.put(url, category);
}


delete(category: Category): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${category.id}`);
}

}
