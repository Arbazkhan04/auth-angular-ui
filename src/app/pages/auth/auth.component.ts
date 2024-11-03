import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignInComponent } from "../../components/auth/sign-in/sign-in.component";
import { SignUpComponent } from "../../components/auth/sign-up/sign-up.component";

@Component({
  selector: 'hm-pg-auth',
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isSignUpVisible: boolean = false; // Initialize to false for Sign In to show by default

  toggleForm() {
    this.isSignUpVisible = !this.isSignUpVisible; // Toggle the form visibility
  }
}
