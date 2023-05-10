import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.scss'],
})
export class NoticeFormComponent {
  constructor(public ref: DynamicDialogRef) {}

  addTimeTableForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    url: new FormControl(''),
  });

  onSubmit() {
    let requestBody = this.addTimeTableForm.value;
    
    this.ref.close(requestBody);
    // this.timeTableService
    //   .addTimeTable(requestBody)
    //   .subscribe({ next: () => {} });
  }
}
