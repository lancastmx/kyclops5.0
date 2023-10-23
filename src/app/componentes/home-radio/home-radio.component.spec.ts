import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRadioComponent } from './home-radio.component';

describe('HomeRadioComponent', () => {
  let component: HomeRadioComponent;
  let fixture: ComponentFixture<HomeRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRadioComponent]
    });
    fixture = TestBed.createComponent(HomeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
