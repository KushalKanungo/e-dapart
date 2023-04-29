import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contest } from '../_models/contest';

@Component({
  selector: 'app-contest-card',
  templateUrl: './contest-card.component.html',
  styleUrls: ['./contest-card.component.scss'],
})
export class ContestCardComponent {
  @Input() contest!: Contest;
  @Output() showDetailsClicked: EventEmitter<number> = new EventEmitter();

  showDetailEmitter() {
    console.log('emitter');

    this.showDetailsClicked.emit();
  }
}
