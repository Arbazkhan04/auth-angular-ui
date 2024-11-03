import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'hm-auth-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  @Input() toggleForm!: () => void;  // Accept toggleForm from the parent component

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      birthdate: [''],
      email: [''],
      username: [''],
      password: [''],
      confirmPassword: [''],
    });
  }
}
