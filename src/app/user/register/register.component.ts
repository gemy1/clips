import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  age: FormControl = new FormControl('', [Validators.required]);
  password: FormControl = new FormControl('', [Validators.required]);

  confirmPassword: FormControl = new FormControl('', [
    Validators.required,
    // this.matchPassword(this.password),
  ]);
  phone: FormControl = new FormControl('', [Validators.required]);

  registerForm: FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
  });

  matchPassword(control: FormControl) {
    const passwordControl = this.registerForm.get('confirmPassword');
    if (!passwordControl || !control.value) return null;
    return control.value === passwordControl.value
      ? null
      : { passwordMismatch: true };
  }

  onRegister() {
    console.log(this.registerForm);
  }

  getControl(FormControlName: string) {
    const control = this.registerForm.get(FormControlName);
    if (!control) return null;
    return control;
  }
}
