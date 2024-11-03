import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { SignInComponent } from "../../components/auth/sign-in/sign-in.component";
import { SignUpComponent } from "../../components/auth/sign-up/sign-up.component";
import gsap from 'gsap';

@Component({
  selector: 'hm-pg-auth',
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements AfterViewInit {
  isSignUpVisible: boolean = false;

  toggleForm() {
    this.isSignUpVisible = !this.isSignUpVisible; // Toggle visibility
    this.animateToggle(); // Trigger animation
  }

  animateToggle() {
    const leftContainer = document.querySelector('.left-container') as HTMLElement;
    const rightContainer = document.querySelector('.flex-col') as HTMLElement; // Target the parent container for better control

    if (this.isSignUpVisible) {
      // Animate left container to 100% width and move left
      gsap.to(leftContainer, {
        width: '100%',
        duration: 0.5,
        onComplete: () => {
          // After animation, move content to the left and hide the container
          gsap.to(leftContainer, { x: '-100%', duration: 0.5, opacity: 0 });
          // Optionally hide the entire form or reset it after animation
          gsap.set(rightContainer, { display: 'none' });
        }
      });
    } else {
      // Reset the left container and animate back
      gsap.fromTo(leftContainer, { x: '-100%', opacity: 0, width: '100%' }, {
        duration: 0.5,
        onStart: () => {
          gsap.set(leftContainer, { width: '50%' }); // Ensure width is reset for the animation
          gsap.set(rightContainer, { display: 'flex' }); // Show right container again
        },
        opacity: 1,
        onComplete: () => {
          gsap.to(leftContainer, { x: '0%', duration: 0.5 });
        }
      });
    }
  }

  ngAfterViewInit() {
    // Optional: Initial state setup or animations
  }
}
