import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<any> {
    const url = `${this.baseUrl}/users?username=${username}`;
    return this.http.get(url);
  }
  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/users`;
    return this.http.post(url, user);
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getWeeklyMarketComparison() {
    return this.http.get(`${this.baseUrl}/weekly-market-comparison`);
  }

  getMonthlyMarketComparison() {
    return this.http.get(`${this.baseUrl}/monthly-market-comparison`);
  }

  getWeeklyUserActivity() {
    return this.http.get(`${this.baseUrl}/weekly-user-activity`);
  }

  getMonthlyUserActivity() {
    return this.http.get(`${this.baseUrl}/monthly-user-activity`);
  }
}
