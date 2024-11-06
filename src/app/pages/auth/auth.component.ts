import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component'
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component'


@Component({
  selector: 'hm-pg-auth',
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  fullWidthTransition: boolean = false;
  isSignUp: boolean = false;

  toggleForm() {
    this.fullWidthTransition = true;
    
    this.isSignUp = !this.isSignUp; // Toggle immediately
    // Reset `fullWidthTransition` after the animation completes
    setTimeout(() => {
      this.fullWidthTransition = false;
    }, 700); // Should match the duration of the CSS animation
  }
}
