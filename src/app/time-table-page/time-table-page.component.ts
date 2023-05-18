import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Contest } from '../_models/contest';
import { ContestFormComponent } from '../contest-form/contest-form.component';
import { ContestViewComponent } from '../contest-view/contest-view.component';
import { ContestsService } from '../contests.service';
import { TimeTableService } from '../_services/time-table.service';
import { TimetableFormComponent } from '../timetable-form/timetable-form.component';
import { TimeTable } from '../_models/timetable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-time-table-page',
  templateUrl: './time-table-page.component.html',
  styleUrls: ['./time-table-page.component.scss'],
})
export class TimeTablePageComponent {
  timeTables!: TimeTable[];
  selectedSemesters: number[] = [];
  timeTable!: any;
  visible: boolean = false;
  isContestDetailDialogVisible: boolean = false;
  semesters = [
    { label: '1 Sem', value: '1' },
    { label: '2 Sem', value: '2' },
    { label: '3 Sem', value: '3' },
    { label: '4 Sem', value: '4' },
    { label: '5 Sem', value: '5' },
    { label: '6 Sem', value: '6' },
    { label: '7 Sem', value: '7' },
    { label: '8 Sem', value: '8' },
  ];

  url!: string;
  query: string = '';
  isLoading: boolean = false;
  page: number = 0;
  rows: number = 10;
  total_count: number = 0;

  ref!: DynamicDialogRef;

  onPageChange(event: any) {
    this.page = event.page;
    console.log(event);

    this.fetchTimeTables();
  }

  fetchTimeTables() {
    this.isLoading = true;
    this.timeTableService
      .getTimeTables(this.page + 1, this.selectedSemesters, this.query)
      .subscribe({
        next: (res: { timeTables: TimeTable[]; total_count: number }) => {
          this.timeTables = res.timeTables;

          this.total_count = res.total_count;
          this.isLoading = false;
        },
      });
  }

  ngOnInit() {
    this.fetchTimeTables();
  }
  ngAfterViewInit() {
    this.selectedSemesters = this.selectedSemesters;
  }
  openForm() {
    this.ref = this.dialogService.open(TimetableFormComponent, {
      header: 'Add TimeTable',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);
      }
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timeTableService: TimeTableService,
    public dialogService: DialogService
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;

    if (state) {
      // console.log(state['semester']);
      this.selectedSemesters = [state['semester']];
    }
  }

  showContestDetails(id: number) {
    this.timeTable = this.timeTables.find((timetable) => timetable.id === id);
    this.ref = this.dialogService.open(ContestViewComponent, {
      header: this.timeTable.title,
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '95vh' },
      data: { contest: this.timeTable },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
      }
    });
  }
}
