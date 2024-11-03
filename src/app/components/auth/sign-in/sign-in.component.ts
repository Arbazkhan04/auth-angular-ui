import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'hm-auth-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm: FormGroup;
  @Input() toggleForm!: () => void;  // Accept toggleForm from the parent component

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      usernameOrEmail: [''],
      password: [''],
    });
  }
}
