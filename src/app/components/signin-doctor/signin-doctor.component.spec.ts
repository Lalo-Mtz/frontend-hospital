import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDoctorComponent } from './signin-doctor.component';

describe('SigninDoctorComponent', () => {
  let component: SigninDoctorComponent;
  let fixture: ComponentFixture<SigninDoctorComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDoctorComponent 
      
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

