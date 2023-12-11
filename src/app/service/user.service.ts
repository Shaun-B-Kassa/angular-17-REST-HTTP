import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private readonly imageApiUrl = 'https://robohash.org'

  constructor(private http: HttpClient) {}



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      tap((user) => console.log(user)),
      map((users) => users.map( user => {
        return {...user, 
          name: user.name.toUpperCase(), 
          image: `${this.imageApiUrl}/${user.username.toLowerCase()}`
        }
      }))
    );
  }

  getText(): Observable<string> {
    return this.http.get('assets/response.txt', {responseType: 'text'})
  }

  getUser(userId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(userid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${userid}`);
  }




}
