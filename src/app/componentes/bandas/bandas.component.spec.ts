import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasComponent } from './bandas.component';

describe('BandasComponent', () => {
  let component: BandasComponent;
  let fixture: ComponentFixture<BandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandasComponent]
    });
    fixture = TestBed.createComponent(BandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
