import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeTableService } from '../_services/time-table.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContestsService } from '../contests.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-timetable-form',
  templateUrl: './timetable-form.component.html',
  styleUrls: ['./timetable-form.component.scss'],
})
export class TimetableFormComponent {
  constructor(
    private timeTableService: TimeTableService,
    public ref: DynamicDialogRef,
    private eventService: ContestsService,
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
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  onSubmit() {
    let requestBody = this.addTimeTableForm.value
    this.eventService.createTimeTable(requestBody).subscribe({next:(dat)=>{

    }})
    this.ref.close(requestBody);
    // this.timeTableService
    //   .addTimeTable(requestBody)
    //   .subscribe({ next: () => {} });
  }
}
