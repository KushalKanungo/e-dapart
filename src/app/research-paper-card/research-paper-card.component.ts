import { Component, Input, OnInit } from '@angular/core';
import { ResearchPaper } from '../_models/research-paper';

@Component({
  selector: 'app-research-paper-card',
  templateUrl: './research-paper-card.component.html',
  styleUrls: ['./research-paper-card.component.scss'],
})
export class ResearchPaperCardComponent implements OnInit {
  @Input() researchPaper!: ResearchPaper;
  authorsList: string = '';
  mentorsList: string = '';

  ngOnInit() {
    this.authorsList = this.nameParser(this.researchPaper.students);
    this.mentorsList = this.nameParser(this.researchPaper.mentors);
  }

  nameParser(namesArray: string[]): string {
    return namesArray.join(', ');
  }
}
