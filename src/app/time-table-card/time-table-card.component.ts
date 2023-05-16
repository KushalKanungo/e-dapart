import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeTable } from '../_models/timetable';
import { EventAddArg } from '@fullcalendar/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventViewComponent } from '../event-view/event-view.component';

@Component({
  selector: 'app-time-table-card',
  templateUrl: './time-table-card.component.html',
  styleUrls: ['./time-table-card.component.scss'],
})
export class TimeTableCardComponent {
  @Input() timeTable!: TimeTable;
  ref!: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  showDetail() {
    this.ref = this.dialogService.open(EventViewComponent, {
      header: this.timeTable.title,
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '95vh' },
      data: { data: this.timeTable, noEvent: true },
    });
    this.ref.onClose.subscribe((data: EventAddArg) => {
      if (data) {
        //TODO Add this data to calendar
      }
    });
  }
}
