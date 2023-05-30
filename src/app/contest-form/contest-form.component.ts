import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ContestsService } from '../contests.service';
import { MessageService } from 'primeng/api';
import { Contest } from '../_models/contest';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss'],
})
export class ContestFormComponent implements OnInit {
  isEditForm: boolean = false;
  contestId!: number;
  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    private http: HttpClient,
    private eventService: ContestsService,
    private messageService: MessageService,
    private config: DynamicDialogConfig
  ) {}

  addContestForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (this.config.data?.contest) {
      this.isEditForm = true;
      this.contestId = this.config.data.contest.id;
      let contest: Contest = this.config.data.contest;
      this.addContestForm.get('title')?.setValue(contest.title);
      this.addContestForm.get('description')?.setValue(contest.description);
      this.addContestForm.get('url')?.setValue(contest.url);
    }
  }

  onSubmit() {
    let requestBody = this.addContestForm.value;
    if (this.isEditForm)
      this.eventService
        .editContest(requestBody, this.contestId)
        .subscribe((data) => {});
    else this.eventService.createContest(requestBody).subscribe((data) => {});
    this.ref.close(requestBody);
  }
}
