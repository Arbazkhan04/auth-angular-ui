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
    const currentWidth = leftContainer.offsetWidth;
    const targetWidth = currentWidth * 2;

    if (!this.isSignUpVisible) {
      // Animate to Sign Up form
      tl.to(leftContainer, {
        width: targetWidth + 'px',
        duration: 1.5,
        ease: 'power2.out',
      })
        .to(leftContainer, {
          x: 600,
          duration: 1.5,
          ease: 'power2.out',
          delay: -1.5,
        })
        .to(rightContainer, {
          x: -500,
          duration: 1.5,
          ease: 'power2.out',
          delay: -1.5,
        })
        .to(leftContainerContent, {
          x: -1000,
          opacity: 0, // Fade out content for smoother transition
          duration: 1,
          ease: 'power2.out',
          delay: -1.5,
        })
        .set(rightContainer, { display: 'none' })
        .set(leftContainer, { xPercent: 0 });

      tl.eventCallback("onComplete", () => {
        this.isSignUpVisible = true;
      });
    } else {
      // Animate to Sign In form
      gsap.set(rightContainer, { display: 'flex' });
      const tl = gsap.timeline();

      tl.to(rightContainer, {
        width: targetWidth + 'px',
        duration: 1.5,
        ease: 'power2.out',
      })
        .to(rightContainer, {
          x: -600,
          duration: 1.5,
          ease: 'power2.out',
          delay: -1.5,
        })
        .to(leftContainer, {
          x: 500,
          duration: 1.5,
          ease: 'power2.out',
          delay: -1.5,
        })
        .to(rightContainerContent, {
          x: 1000,
          opacity: 0, // Fade out content for smoother transition
          duration: 1,
          ease: 'power2.out',
          delay: -1.5,
        })
        .set(leftContainer, { display: 'flex' });

      tl.eventCallback("onComplete", () => {
        this.isSignUpVisible = false;
      });
    }
  }


  ngAfterViewInit() {
    // Initial state setup
    gsap.set('.right-container', { xPercent: -100, display: 'none' }); // Initially hide Sign In
  }
}
