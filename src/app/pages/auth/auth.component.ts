import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    this.animateToggle();
  }
  animateToggle() {
    const leftContainer = document.querySelector('.left-container') as HTMLElement;
    const rightContainer = document.querySelector('.right-container') as HTMLElement;
    const leftContainerContent = leftContainer.querySelector('.left-container-content') as HTMLElement;
    const rightContainerContent = rightContainer.querySelector('.right-container-content') as HTMLElement;

    const tl = gsap.timeline();

    // Define the target width for both containers
    const currentWidth = leftContainer.offsetWidth; // Get current width
    const targetWidth = currentWidth * 2; // Double the width

    if (!this.isSignUpVisible) {
      // Animate to Sign Up form
      tl.to(leftContainer, {
        width: targetWidth + 'px', // Set the width to double
        duration: 1.5,
        ease: 'power2.inOut',
      })
        .to(leftContainer, {
          x: 600, // Move leftContainer towards the center
          duration: 1.5,
          ease: 'power2.inOut',
          delay: -1.5, // Start this animation while the previous one is still running
        })
        .to(rightContainer, {
          x: -500, // Move rightContainer towards the center
          duration: 1.5,
          ease: 'power2.inOut',
          delay: -1.5, // Start this animation simultaneously
        })
        .to(leftContainerContent, {
          x: -1000, // Move the content of leftContainer to the left
          duration: 1, // Duration for the content animation
          ease: 'power2.inOut',
          delay: -1.5, // Sync with the previous animations
        })
        .set(rightContainer, { display: 'none' }) // Hide right-container after the animation completes
        .set(leftContainer, { xPercent: 0 }); // Reset left-container position

      tl.eventCallback("onComplete", () => {
        this.isSignUpVisible = true;
      });
    } else {
      // Animate to Sign In form
      gsap.set(rightContainer, { display: 'flex' }); // Show right-container first
      const tl = gsap.timeline(); // Initialize timeline

      tl.to(rightContainer, {
        width: targetWidth + 'px', // Use the same targetWidth
        duration: 1.5,
        ease: 'power2.inOut',
      })
        .to(rightContainer, {
          x: -600, // Move rightContainer towards the center
          duration: 1.5,
          ease: 'power2.inOut',
          delay: -1.5, // Start this animation while the previous one is still running
        })
        .to(leftContainer, {
          x: 500, // Move leftContainer towards the center
          duration: 1.5,
          ease: 'power2.inOut',
          delay: -1.5, // Start this animation simultaneously
        })
        .to(rightContainerContent, {
          x: 1000, // Move the content of rightContainer to the right
          duration: 1, // Duration for the content animation
          ease: 'power2.inOut',
          delay: -1.5, // Sync with the previous animations
        })
        .set(leftContainer, { display: 'flex' }); // Set leftContainer display to flex

      tl.eventCallback("onComplete", () => {
        this.isSignUpVisible = false; // Update visibility state
      });
    }
  }


  ngAfterViewInit() {
    // Initial state setup
    gsap.set('.right-container', { xPercent: -100, display: 'none' }); // Initially hide Sign In
  }
}
