import { Component, Input } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent {
  eventType!: string;
  eventData!: any;
  desc!: string;
  url!: string;
  sem!: string;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    if (this.config.data.noEvent) {
      this.eventData = config.data.data;
      this.eventData.start = config.data.data.date;
      this.desc = config.data.data.description;
      this.url = config.data.data.url;
      this.sem = config.data.data?.semester;
    } else {
      this.eventData = config.data.eventData;
      this.desc = config.data.eventData.extendedProps.description;
      this.url = config.data.eventData.extendedProps.content_url;
      this.eventType = config.data.eventData.extendedProps.event_type;
      this.sem = config.data.eventData.extendedProps.semester;
    }
    // console.log(this.eventData.start);
  }

  downloadGenerator(url: string) {
    let match = /\/d\/([a-zA-Z0-9_-]+)\//.exec(url);
    let fileId = match ? match[1] : null;
    let downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return downloadLink;
  }
}
