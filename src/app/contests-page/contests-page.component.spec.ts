import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsPageComponent } from './contests-page.component';

describe('ContestsPageComponent', () => {
  let component: ContestsPageComponent;
  let fixture: ComponentFixture<ContestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
