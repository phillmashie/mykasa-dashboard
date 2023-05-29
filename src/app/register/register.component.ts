import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  fullname: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  register(): void {
    // Add your registration logic here
    // Example: save user data, perform validation, etc.

    const newUser = {
      fullname: this.fullname,
      username: this.username,
      password: this.password,
      role: 'admin',
    };

    this.userService.registerUser(newUser).subscribe(() => {
      // If registration is successful, navigate to the login page
      this.router.navigate(['/login']);
    });
  }
}
