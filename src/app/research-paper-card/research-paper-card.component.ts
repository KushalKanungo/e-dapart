import { Component, Input } from '@angular/core';
import { ResearchPaper } from '../_models/research-paper';

@Component({
  selector: 'app-research-paper-card',
  templateUrl: './research-paper-card.component.html',
  styleUrls: ['./research-paper-card.component.scss'],
})
export class ResearchPaperCardComponent {
  @Input() researchPaperDetail!: ResearchPaper;
}
