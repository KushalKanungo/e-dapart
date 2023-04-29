import { Component } from '@angular/core';
import { Contest } from '../_models/contest';
import { ContestsService } from '../contests.service';

@Component({
  selector: 'app-contests-page',
  templateUrl: './contests-page.component.html',
  styleUrls: ['./contests-page.component.scss'],
})
export class ContestsPageComponent {
  contests: Contest[] = [];
  visible: boolean = false;
  query: string = ''
  showDialog() {
    this.visible = true;
  }
  constructor(private contestService: ContestsService) {
    // this.contests = this.contestService.allContests;
  }

  onSearch($event: any){
    console.log($event);
    
    this.contests = this.contestService.searchContests(this.query)
  }
}
