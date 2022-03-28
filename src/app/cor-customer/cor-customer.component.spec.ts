import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorCustomerComponent } from './cor-customer.component';

describe('CorCustomerComponent', () => {
  let component: CorCustomerComponent;
  let fixture: ComponentFixture<CorCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
