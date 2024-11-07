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
    // Step 1: Start expanding the panel to full width, while text remains in place
    this.fullWidthTransition = true;

    // Step 2: Slide out the current text a bit sooner to allow an overlap with panel expansion
    setTimeout(() => {
      this.isTextSlidingOut = true;

      // Step 3: Toggle the form type and slide in the new text
      setTimeout(() => {
        this.isSignUp = !this.isSignUp;
        this.isTextSlidingOut = false;
        this.fullWidthTransition = false;
        this.isTextSlidingIn = true;

        // Step 4: Finish the text slide-in animation
        setTimeout(() => {
          this.isTextSlidingIn = false;
        }, 500); // Shortened text slide-in duration
      }, 800); // Shortened text slide-out duration
    }, 500); // Panel expansion starts earlier
  }
}
