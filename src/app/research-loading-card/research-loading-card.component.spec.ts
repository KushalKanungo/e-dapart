import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchLoadingCardComponent } from './research-loading-card.component';

describe('ResearchLoadingCardComponent', () => {
  let component: ResearchLoadingCardComponent;
  let fixture: ComponentFixture<ResearchLoadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchLoadingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchLoadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
