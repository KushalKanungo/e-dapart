import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventAddArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TimetableFormComponent } from '../timetable-form/timetable-form.component';

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
      icon: 'pi pi-pencil',
      command: () => {},
    },
    {
      icon: 'pi pi-refresh',
      command: () => {},
    },
    {
      icon: 'pi pi-trash',
      command: () => {
        this.handleDateClick();
      },
    },
    {
      icon: 'pi pi-upload',
      routerLink: ['/fileupload'],
    },
    {
      icon: 'pi pi-external-link',
      target: '_blank',
      url: 'http://angular.io',
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
}
