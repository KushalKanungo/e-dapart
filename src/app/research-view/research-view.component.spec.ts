import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchViewComponent } from './research-view.component';

describe('ResearchViewComponent', () => {
  let component: ResearchViewComponent;
  let fixture: ComponentFixture<ResearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
