import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCentersComponent } from './device-centers.component';

describe('DeviceCentersComponent', () => {
  let component: DeviceCentersComponent;
  let fixture: ComponentFixture<DeviceCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
