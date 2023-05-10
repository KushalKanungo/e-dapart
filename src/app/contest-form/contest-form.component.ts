import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContestsService } from '../contests.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss'],
})
export class ContestFormComponent {
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    private http: HttpClient,
    private eventService: ContestsService,
    private messageService: MessageService
  ) {}
  addContestForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    url: new FormControl('  ', Validators.required),
  });

  onSubmit() {
    let requestBody = this.addContestForm.value;
    this.eventService.createContest(requestBody).subscribe((data)=>{
    })
    this.ref.close(requestBody);
    
  }
}
