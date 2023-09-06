import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketingService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  exportMarketingData(filters: any): Observable<any> {
    const url = `${this.baseUrl}/csv/export`;
    return this.http.post(url, filters);
  }

  getFilteredMarketingData(filters: any): Observable<any> {
    const url = `${this.baseUrl}/csv/export`;
    return this.http.post(url, filters);
  }
}
