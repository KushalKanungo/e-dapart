import { Component, Input } from '@angular/core';
import { Contest } from '../_models/contest';

@Component({
  selector: 'app-contest-card',
  templateUrl: './contest-card.component.html',
  styleUrls: ['./contest-card.component.scss'],
})
export class ContestCardComponent {
  @Input() contest!: Contest;
  
}
