import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUnitDialogComponent } from './sys-unit-dialog.component';

describe('SysUnitDialogComponent', () => {
  let component: SysUnitDialogComponent;
  let fixture: ComponentFixture<SysUnitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysUnitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUnitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
