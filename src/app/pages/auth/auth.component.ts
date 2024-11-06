import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component';

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
  isTextSlidingOut: boolean = false;
  isTextSlidingIn: boolean = false;

  toggleForm() {
    // Step 1: Start expanding the panel to full width, keeping text fixed
    this.fullWidthTransition = true;

    // Step 2: Slide out the current text to the left
    setTimeout(() => {
      this.isTextSlidingOut = true; // Trigger text slide-out animation

      // Step 3: After text slides out, toggle form type and slide in the new text from the right
      setTimeout(() => {
        this.isSignUp = !this.isSignUp; // Toggle between sign-up and sign-in form
        this.isTextSlidingOut = false; // Reset text slide-out state
        this.fullWidthTransition = false; // Reset panel width transition
        this.isTextSlidingIn = true; // Start sliding in the new text from the right

        // Step 4: Complete text slide-in animation
        setTimeout(() => {
          this.isTextSlidingIn = false;
        }, 500); // Text slide-in duration
      }, 500); // Text slide-out duration
    }, 700); // Panel expansion duration
  }
}
