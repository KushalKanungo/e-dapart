import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestLoadingCardComponent } from './contest-loading-card.component';

describe('ContestLoadingCardComponent', () => {
  let component: ContestLoadingCardComponent;
  let fixture: ComponentFixture<ContestLoadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestLoadingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestLoadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
