import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeTableService } from '../_services/time-table.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-timetable-form',
  templateUrl: './timetable-form.component.html',
  styleUrls: ['./timetable-form.component.scss'],
})
export class TimetableFormComponent {
  constructor(
    private timeTableService: TimeTableService,
    public ref: DynamicDialogRef
  ) {}

  semesters = [
    { label: '1 Sem', value: '1' },
    { label: '2 Sem', value: '2' },
    { label: '3 Sem', value: '3' },
    { label: '4 Sem', value: '4' },
    { label: '5 Sem', value: '5' },
    { label: '6 Sem', value: '6' },
    { label: '7 Sem', value: '7' },
    { label: '8 Sem', value: '8' },
  ];

  addTimeTableForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  onSubmit() {
    let requestBody = {
      event_type: 'timetable',
      title: this.addTimeTableForm.get('title')?.value,
      date: this.addTimeTableForm
        .get('start_date')
        ?.value.toISOString()
        .slice(0, 10),
      description: this.addTimeTableForm.get('description')?.value,
      url: this.addTimeTableForm.get('url')?.value,
      sem: this.addTimeTableForm.get('semester')?.value,
    };
    this.ref.close(requestBody);
    // this.timeTableService
    //   .addTimeTable(requestBody)
    //   .subscribe({ next: () => {} });
  }
}
