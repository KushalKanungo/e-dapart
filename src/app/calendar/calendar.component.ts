import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventAddArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TimetableFormComponent } from '../timetable-form/timetable-form.component';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { ContestFormComponent } from '../contest-form/contest-form.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('fullcalendar') calendarComponent: any;
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService) {}

  calendarOptions: CalendarOptions = {
    // aspectRatio: 1,
    // height: 400,
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    eventClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    eventAdd: this.handleEventAdd.bind(this),
    events: [
      { title: 'Event 1', date: '2023-05-01' },
      { title: 'Event 2', date: '2023-05-05', color: 'red' },
    ],
    // views: {
    //   timeGridFourDay: {
    //     type: 'dayGrid',
    //     duration: { days: 7 },
    //   },
    // },
    // initialView: 'timeGridFourDay',
  };

  items = [
    {
      tooltipOptions: {
        tooltipLabel: 'Add Notice',
        tooltipPosition: 'left',
      },
      icon: 'pi pi-copy',
      command: () => {
        this.openAddNoticeForm();
      },
    },
    {
      icon: 'pi pi-megaphone',
      tooltipOptions: {
        tooltipLabel: 'Add Contest',
        tooltipPosition: 'left',
      },
      command: () => {
        this.openContestForm();
      },
    },
    {
      icon: 'pi pi-table',
      tooltipOptions: {
        tooltipLabel: 'Add TimeTable',
        tooltipPosition: 'left',
      },
      command: () => {
        this.handleDateClick();
      },
    },
  ];

  handleDateClick() {
    this.ref = this.dialogService.open(TimetableFormComponent, {
      header: 'Add TimeTable',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: EventAddArg) => {
      if (data) {
        //TODO Add this data to calendar
        this.addEventToCalendar(data);
      }
    });
  }

  handleEventAdd(info: any) {
    console.log('Event added', info.event);
  }

  // This function is used to add event to the calendar locally
  addEventToCalendar(data: EventAddArg) {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.addEvent(data);
  }

  openAddNoticeForm() {
    this.ref = this.dialogService.open(NoticeFormComponent, {
      header: 'Add Notice',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);

        // TODO: API calling here
      }
    });
  }

  openContestForm() {
    this.ref = this.dialogService.open(ContestFormComponent, {
      header: 'Add Contest',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);
        // this.contests.push(data);
        // TODO: API calling here
      }
    });
  }
}
