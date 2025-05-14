import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStudentSafeComponent } from './login-student-safe.component';

describe('LoginStudentSafeComponent', () => {
  let component: LoginStudentSafeComponent;
  let fixture: ComponentFixture<LoginStudentSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginStudentSafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStudentSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
