import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventAddArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TimetableFormComponent } from '../timetable-form/timetable-form.component';
import { NoticeFormComponent } from '../notice-form/notice-form.component';
import { ContestFormComponent } from '../contest-form/contest-form.component';
import { ContestsService } from '../contests.service';
import { EventViewComponent } from '../event-view/event-view.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('fullcalendar') calendarComponent: any;
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService, public eventService: ContestsService, 
    private messageService: MessageService
    ) {}

  calendarOptions: CalendarOptions = {
    // aspectRatio: 1,
    // height: 400,
    
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    eventClick: this.handleDateClick.bind(this)  , // MUST ensure `this` context is maintained
    events: [
      { title: 'Event 1', date: '2023-05-01' },
      { title: 'Event 2', date: '2023-05-05', color: 'red' },
    ],
    datesSet: (dateset)=> {
      // Check if the view has changed to a different month

      // console.log(dateset.view.currentStart.getMonth());
      this.fetchEvents()
    }
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
        this.openTimeTableForm();
      },
    },
  ];


  handleDateClick(info:any) {
    console.log(info.event.extendedProps.description);
    
    this.ref = this.dialogService.open(EventViewComponent, {
      header: info.event.title,
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '95vh' },
      data: {eventType: info.event.event_type, eventData: info.event}
    });
    this.ref.onClose.subscribe((data: EventAddArg) => {
      if (data) {
        //TODO Add this data to calendar
        this.addEventToCalendar(data);
      }
    });
  }
  openTimeTableForm() {
    
    this.ref = this.dialogService.open(TimetableFormComponent, {
      header: 'Add TimeTable',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: EventAddArg) => {
      if (data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Time Table Added' });
        this.fetchEvents()
      }
    });
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
        this.eventService.createNotice(data).subscribe((data)=>{
          if(data){

            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Notice Added' });
            this.fetchEvents()
          }
        })
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
      if(data){

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New Contest Added' });
        this.fetchEvents()
      }
    });
  }

  fetchEvents(){
    const calendarApi = this.calendarComponent.getApi();
    let month = calendarApi.currentData.currentDate.getMonth();
    let year = calendarApi.currentData.currentDate.getFullYear();
    calendarApi.removeAllEvents();
    this.eventService.event_by_month(month+1,year).subscribe((events: any[])=>{
      
      events.forEach((eve)=>{this.addEventToCalendar(eve)})
    })
  }
}
