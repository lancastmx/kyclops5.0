import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventosComponent } from './home-eventos.component';

describe('HomeEventosComponent', () => {
  let component: HomeEventosComponent;
  let fixture: ComponentFixture<HomeEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEventosComponent]
    });
    fixture = TestBed.createComponent(HomeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
