import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverinfoComponent } from './driverinfo.component';

describe('DriverinfoComponent', () => {
  let component: DriverinfoComponent;
  let fixture: ComponentFixture<DriverinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
