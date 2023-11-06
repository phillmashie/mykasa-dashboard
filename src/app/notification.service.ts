import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseUrl = 'http://your-backend-url'; // Replace with your actual backend base URL

  constructor(private http: HttpClient) {}

  addNotification(text: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', image, image.name);

    return this.http.post<any>(`${this.baseUrl}/add-promotion`, formData);
  }
}
