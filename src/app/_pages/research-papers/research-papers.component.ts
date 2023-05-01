import { Component } from '@angular/core';
import { ResearchPaper } from 'src/app/_models/research-paper';
import { ResearchPaperService } from 'src/app/_services/research-paper.service';

@Component({
  selector: 'app-research-papers',
  templateUrl: './research-papers.component.html',
  styleUrls: ['./research-papers.component.scss'],
})
export class ResearchPapersComponent {
  researchPapers: ResearchPaper[] = [];

  constructor(private researchPaperService: ResearchPaperService) {
    this.researchPapers = researchPaperService.researchPapers;
  }
}
