import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResearchPaper } from '../_models/research-paper';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ResearchViewComponent } from '../research-view/research-view.component';
import { EventAddArg } from '@fullcalendar/core';

@Component({
  selector: 'app-research-paper-card',
  templateUrl: './research-paper-card.component.html',
  styleUrls: ['./research-paper-card.component.scss'],
})
export class ResearchPaperCardComponent implements OnInit {
  @Input() researchPaper!: ResearchPaper;
  @Output() passSelectedName: EventEmitter<string> = new EventEmitter();
  authorsList: string = '';
  mentorsList: string = '';
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService) {}
  ngOnInit() {
    this.authorsList = this.nameParser(this.researchPaper.students);
    this.mentorsList = this.nameParser(this.researchPaper.mentors);
  }

  showPaper() {
    this.ref = this.dialogService.open(ResearchViewComponent, {
      header: this.researchPaper.title,
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '95vh' },
      data: { researchData: this.researchPaper },
    });
    this.ref.onClose.subscribe((data: EventAddArg) => {
      if (data) {
      }
    });
  }

  nameParser(namesArray: string[]): string {
    return namesArray.join(', ');
  }

  chipClickHandeler(selectedName: string) {
    console.log(selectedName);

    this.passSelectedName.emit(selectedName);
  }
}
