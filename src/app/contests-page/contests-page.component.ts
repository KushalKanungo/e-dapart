import { Component } from '@angular/core';
import { Contest } from '../_models/contest';
import { ContestsService } from '../contests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ContestFormComponent } from '../contest-form/contest-form.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContestViewComponent } from '../contest-view/contest-view.component';

@Component({
  selector: 'app-contests-page',
  templateUrl: './contests-page.component.html',
  styleUrls: ['./contests-page.component.scss'],
})
export class ContestsPageComponent {
  contests: Contest[] = [];
  contest!: any;
  visible: boolean = false;
  isContestDetailDialogVisible: boolean = false;

  url!: string;
  query: string = '';
  isLoading: boolean = false;
  page: number = 0;
  rows: number = 10;
  total_count: number = 0;

  ref!: DynamicDialogRef;

  onPageChange(event: any) {
    this.page = event.page;
    console.log(event);

    this.fetchContests();
  }

  fetchContests() {
    this.isLoading = true;
    this.contestService.getContests(this.page + 1, this.query).subscribe({
      next: (res: { contests: Contest[]; total_count: number }) => {
        this.contests = res.contests;

        this.total_count = res.total_count;
        this.isLoading = false;
      },
    });
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    this.fetchContests();
  }

  openForm() {
    this.ref = this.dialogService.open(ContestFormComponent, {
      header: 'Add Contest',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.contests.push(data);
        // TODO: API calling here
      }
    });
  }

  addContestForm: FormGroup = new FormGroup({
    title: new FormControl('title', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    url: new FormControl('url', Validators.required),
  });

  constructor(
    private contestService: ContestsService,
    public dialogService: DialogService,
    private sanitizer: DomSanitizer
  ) {
    this.contests = this.contestService.allContests;
  }

  showContestDetails(id: number) {
    this.contest = this.contests.find((cont) => cont.id === id);
    this.ref = this.dialogService.open(ContestViewComponent, {
      header: this.contest.title,
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '95vh' },
      data: { contest: this.contest },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
      }
    });
  }
}
