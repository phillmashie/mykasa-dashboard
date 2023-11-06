import { Component } from '@angular/core';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css'],
})
export class AddNotificationComponent {
  notificationText: string = '';
  selectedImage: File | null = null;

  constructor(private notificationService: NotificationService) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  addNotification() {
    if (!this.notificationText || !this.selectedImage) {
      alert('Please enter text and select an image.');
      return;
    }

    this.notificationService
      .addNotification(this.notificationText, this.selectedImage)
      .subscribe(
        (response) => {
          console.log('Notification added successfully', response);
          // You can redirect to a different page or perform other actions upon successful addition
        },
        (error) => {
          console.error('Error adding notification', error);
        }
      );
  }
}
