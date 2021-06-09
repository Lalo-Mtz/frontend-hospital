import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninStaffComponent } from './signin-staff.component';

describe('SigninStaffComponent', () => {
  let component: SigninStaffComponent;
  let fixture: ComponentFixture<SigninStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
