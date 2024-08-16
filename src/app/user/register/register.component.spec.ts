import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, Validators } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [SharedModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the register component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form group and controller with validator', () => {
    expect(component.registerForm).toBeTruthy();
    expect(component.registerForm.controls).toBeTruthy();

    expect(
      component.registerForm.get('name')?.hasValidator(Validators.required)
    ).toBeTruthy();
  });

  it('should have error messages for required fields', () => {
    component.registerForm.controls['name'].setValue('gamal');
    component.registerForm.controls['email'].setValue('');

    fixture.detectChanges();

    const nameError = component.getControl('name')?.errors?.['required'];
    const emailError = component.getControl('email')?.errors?.['required'];

    expect(nameError).toBe(undefined);
    expect(emailError).toBeTruthy();
  });

  it('should test the matchPassword validator', () => {
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('password');

    fixture.detectChanges();

    const matchError =
      component.getControl('confirmPassword')?.errors?.['notMatch'];

    expect(matchError).toBe(undefined);

    component.registerForm.controls['confirmPassword'].setValue(
      'wrongPassword'
    );
    fixture.detectChanges();
    const notMatchError =
      component.getControl('confirmPassword')?.errors?.['notMatch'];
    expect(notMatchError).toBeTruthy();
  });

  it('should call the onRegister method when form is valid', () => {
    component.registerForm.setValue({
      name: 'gamal',
      email: 'gamal@gmail.com',
      age: 20,
      password: 'password',
      confirmPassword: 'password',
      phone: '1234567890',
    });
    fixture.detectChanges();

    jest.spyOn(component.registerForm, 'reset');
    component.onRegister();
    expect(component.registerForm.reset).toHaveBeenCalled();
  });

  it('should disable the register button when form is invalid', () => {
    component.registerForm.setValue({
      name: '',
      email: 'gamal@gmail.com',
      age: 20,
      password: 'password',
      confirmPassword: 'password',
      phone: '1234567890',
    });
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;

    expect(submitButton.disabled).toBeTruthy();
  });
});
