import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login(): void {
    // Add your login logic here
    // Example: perform authentication, check credentials, etc.

    this.userService.getUserByUsername(this.username).subscribe((user: { password: string; role: string; }) => {
      if (user && user.password === this.password && user.role === 'admin') {
        // If login is successful and user has admin role, navigate to the dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // If login is unsuccessful or user doesn't have admin role, display an error message or perform any desired action
        console.log('Invalid credentials or insufficient privileges');
      }
    });
  }
}
