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
  transitioning: boolean = false; // To handle intermediate transition states

  toggleForm() {
    this.transitioning = true;

    // Step 1: Trigger full width transition of the panel
    this.fullWidthTransition = true;

    // Step 2: After panel transition, toggle form and start text transition
    setTimeout(() => {
      this.isSignUp = !this.isSignUp; // Toggle form view after panel transition
      this.fullWidthTransition = false; // Reset panel width

      // Step 3: End transition after text animation completes
      setTimeout(() => {
        this.transitioning = false;
      }, 500); // Adjust to match text animation duration
    }, 700); // Adjust to match panel transition duration
  }
}
