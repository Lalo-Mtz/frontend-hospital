import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulconComponent } from './resulcon.component';

describe('ResulconComponent', () => {
  let component: ResulconComponent;
  let fixture: ComponentFixture<ResulconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
