import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, user);
  }

  getUserByUsername(username: string): Observable<any> {
    const url = `${this.baseUrl}/users/${username}`;
    return this.http.get(url);
  }
}
