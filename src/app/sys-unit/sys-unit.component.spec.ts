import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUnitComponent } from './sys-unit.component';

describe('SysUnitComponent', () => {
  let component: SysUnitComponent;
  let fixture: ComponentFixture<SysUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
