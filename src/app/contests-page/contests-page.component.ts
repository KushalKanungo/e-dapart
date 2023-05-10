import { Component } from '@angular/core';
import { Contest } from '../_models/contest';
import { ContestsService } from '../contests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ContestFormComponent } from '../contest-form/contest-form.component';

@Component({
  selector: 'app-contests-page',
  templateUrl: './contests-page.component.html',
  styleUrls: ['./contests-page.component.scss'],
})
export class ContestsPageComponent {
  contests: Contest[] = [];
  visible: boolean = false;
  isContestDetailDialogVisible: boolean = false;
  query: string = '';
  isLoading: boolean = true;
  first: number = 0;
  rows: number = 10;

  ref!: DynamicDialogRef;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
    public dialogService: DialogService
  ) {
    this.contests = this.contestService.allContests;
  }

  showContestDetails(id: number) {
    this.isContestDetailDialogVisible = !this.isContestDetailDialogVisible;
  }

  onSearch($event: any) {
    this.query = $event.target.value;

    this.contests = this.contestService.searchContests(this.query);
    if (this.query === '') {
      this.contests = this.contestService.allContests;
    }
  }
}
