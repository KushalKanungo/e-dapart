import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasearchPaperFormComponent } from './reasearch-paper-form.component';

describe('ReasearchPaperFormComponent', () => {
  let component: ReasearchPaperFormComponent;
  let fixture: ComponentFixture<ReasearchPaperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasearchPaperFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasearchPaperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
