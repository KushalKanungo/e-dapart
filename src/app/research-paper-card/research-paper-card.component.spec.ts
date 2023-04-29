import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchPaperCardComponent } from './research-paper-card.component';

describe('ResearchPaperCardComponent', () => {
  let component: ResearchPaperCardComponent;
  let fixture: ComponentFixture<ResearchPaperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchPaperCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchPaperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
