import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignInComponent } from "../../components/auth/sign-in/sign-in.component";

@Component({
  selector: 'hm-pg-auth',
  standalone: true,
  imports: [CommonModule, SignInComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
