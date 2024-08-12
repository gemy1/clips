import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

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

  confirmPassword: FormControl = new FormControl('', [Validators.required]);
  phone: FormControl = new FormControl('', [Validators.required]);

  registerForm: FormGroup = new FormGroup(
    {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phone: this.phone,
    },
    [this.matchPassword()]
  );

  matchPassword(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      if (password === confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors(null);
        return null;
      }
      formGroup.get('confirmPassword')?.setErrors({ notMatch: true });
      return { notMatch: true };
    };
  }

  onRegister() {
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }

    this.registerForm.reset();
  }

  getControl(FormControlName: string) {
    const control = this.registerForm.get(FormControlName);
    if (!control) return null;
    return control;
  }
}
