import { Component } from '@angular/core';
import { Contest } from '../_models/contest';
import { ContestsService } from '../contests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  showDialog() {
    this.visible = true;
  }

  addContestForm: FormGroup = new FormGroup({
    title: new FormControl('title', Validators.required),
    description: new FormControl('', Validators.required),
    last_date: new FormControl('', Validators.required),
    url: new FormControl('url', Validators.required),
  });

  constructor(private contestService: ContestsService) {
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
