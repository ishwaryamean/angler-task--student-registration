import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationListComponent } from './student-registration-list.component';

describe('StudentRegistrationListComponent', () => {
  let component: StudentRegistrationListComponent;
  let fixture: ComponentFixture<StudentRegistrationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentRegistrationListComponent]
    });
    fixture = TestBed.createComponent(StudentRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
