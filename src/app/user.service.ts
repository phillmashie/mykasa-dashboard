import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://mykasa-api-dev.inspirze.com';

  constructor(private http: HttpClient) {}

  login(msisdn: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/user/login`;
    const body = { msisdn, password };
    return this.http.post(url, body);
  }

  getUserByUsername(msisdn: string): Observable<any> {
    const url = `${this.baseUrl}/user/login?msisdn=${msisdn}`;
    return this.http.get(url);
  }
  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/users`;
    return this.http.post(url, user);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/profile`);
  }
  getUser(msisdn: string) {
    return this.http.get(`${this.baseUrl}/user/profile?msisdn=${msisdn}`);
  }

  getWeeklyMarketComparison(): Observable<any> {
    return this.http.get(`${this.baseUrl}/marketing/weekly-market-comparison`);
  }

  getMonthlyMarketComparison(): Observable<any> {
    return this.http.get(`${this.baseUrl}/marketing/monthly-market-comparison`);
  }

  getWeeklyUserActivity(): Observable<any> {
    return this.http.get(`${this.baseUrl}/marketing/weekly-user-activity`);
  }

  getMonthlyUserActivity(): Observable<any> {
    return this.http.get(`${this.baseUrl}/marketing/monthly-user-activity`);
  }

  getMonthlyUserActivityByProvince(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/user/monthly-user-activity-by-province`
    );
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  showMarketing(): Observable<any> {
    // Perform an HTTP GET request to your backend API endpoint for marketing data
    return this.http.get<any>(this.baseUrl);
  }
}
