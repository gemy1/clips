import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModalComponent } from './auth-modal.component';
import { TabComponent } from '../../shared/tab/tab.component';
import { TabsContainerComponent } from '../../shared/tabs-container/tabs-container.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ModalComponent } from '../../shared/modal/modal.component';

describe('AuthModalComponent', () => {
  let component: AuthModalComponent;
  let fixture: ComponentFixture<AuthModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthModalComponent,
        TabComponent,
        TabsContainerComponent,
        RegisterComponent,
        LoginComponent,
        ModalComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
