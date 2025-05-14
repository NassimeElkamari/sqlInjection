import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceStudentComponent } from './espace-student.component';

describe('EspaceStudentComponent', () => {
  let component: EspaceStudentComponent;
  let fixture: ComponentFixture<EspaceStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
