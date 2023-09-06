import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphDataService {
  private baseUrl = '/api/marketing-dashboard/monthly-and-weekly-comparison'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  // Fetch data from the backend
  getGraphData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
