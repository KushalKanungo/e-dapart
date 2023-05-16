import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTablePageComponent } from './time-table-page.component';

describe('TimeTablePageComponent', () => {
  let component: TimeTablePageComponent;
  let fixture: ComponentFixture<TimeTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
