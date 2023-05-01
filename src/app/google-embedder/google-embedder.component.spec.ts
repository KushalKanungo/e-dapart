import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleEmbedderComponent } from './google-embedder.component';

describe('GoogleEmbedderComponent', () => {
  let component: GoogleEmbedderComponent;
  let fixture: ComponentFixture<GoogleEmbedderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleEmbedderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleEmbedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
