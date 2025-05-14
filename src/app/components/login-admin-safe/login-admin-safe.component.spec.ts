import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminSafeComponent } from './login-admin-safe.component';

describe('LoginAdminSafeComponent', () => {
  let component: LoginAdminSafeComponent;
  let fixture: ComponentFixture<LoginAdminSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdminSafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdminSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
