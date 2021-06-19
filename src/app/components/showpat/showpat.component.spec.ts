import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpatComponent } from './showpat.component';

describe('ShowpatComponent', () => {
  let component: ShowpatComponent;
  let fixture: ComponentFixture<ShowpatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
