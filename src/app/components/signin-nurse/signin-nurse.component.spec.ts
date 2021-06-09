import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninNurseComponent } from './signin-nurse.component';

describe('SigninNurseComponent', () => {
  let component: SigninNurseComponent;
  let fixture: ComponentFixture<SigninNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninNurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
