import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

describe('input component', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('should create the input component', () => {
    expect(component).toBeTruthy();
  });

  it('should create an input with type email', () => {
    component.type = 'email';
    component.placeholder = 'enter your email';
    component.control = new FormControl('');
    fixture.detectChanges();

    const nativeElement = fixture.nativeElement as HTMLInputElement;

    const inputElement = nativeElement.querySelector('input');
    expect(inputElement?.type).toBe('email');
  });

  it('it should update the form control value when input', () => {
    component.type = 'email';
    component.placeholder = 'enter your email';
    component.control = new FormControl('gamal');
    fixture.detectChanges();

    const nativeElement = fixture.nativeElement as HTMLInputElement;

    const inputElement = nativeElement.querySelector('input');
    inputElement!.value = 'ali';
    inputElement?.dispatchEvent(new Event('input'));
    expect(inputElement?.value).toBe('ali');
  });
});
