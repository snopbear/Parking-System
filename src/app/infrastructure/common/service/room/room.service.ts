import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = 'http://localhost:3000/room';
  constructor(private http: HttpClient) {
  }

  get(): Observable<Room[]> {
    return this.http
      .get<Room[]>(this.baseUrl);
  }

  add(room: Room): Observable<Room> {
    return this.http
      .post<Room>(this.baseUrl, room);
  }


  edit(room: Room): Observable<Room> {
    const url = `${this.baseUrl}/${room.id}`;
    return  this.http.put(url, room);
}


delete(room: Room): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${room.id}`);
}

}
