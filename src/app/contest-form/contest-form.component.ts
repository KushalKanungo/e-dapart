import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss'],
})
export class ContestFormComponent {
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef
  ) {}
  addContestForm: FormGroup = new FormGroup({
    title: new FormControl('title', Validators.required),
    description: new FormControl('', Validators.required),
    last_date: new FormControl('', Validators.required),
    url: new FormControl('url', Validators.required),
  });

  onSubmit() {
    let requestBody = this.addContestForm.value;
    this.ref.close(requestBody);
    // this.timeTableService
    //   .addTimeTable(requestBody)
    //   .subscribe({ next: () => {} });
  }
}
