import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TimeTableService } from '../_services/time-table.service';

@Component({
  selector: 'app-reasearch-paper-form',
  templateUrl: './reasearch-paper-form.component.html',
  styleUrls: ['./reasearch-paper-form.component.scss'],
})
export class ReasearchPaperFormComponent {
  constructor(
    private timeTableService: TimeTableService,
    public ref: DynamicDialogRef
  ) {}

  addResearchPapersForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    students: new FormControl('', Validators.required),
    published_year: new FormControl('', Validators.required),
    mentors: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  onSubmit() {
    let requestBody = this.addResearchPapersForm.value;
    this.ref.close(requestBody);
    // this.timeTableService
    //   .addTimeTable(requestBody)
    //   .subscribe({ next: () => {} });
  }
}
