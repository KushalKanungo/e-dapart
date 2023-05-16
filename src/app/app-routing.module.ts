import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsPageComponent } from './contests-page/contests-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResearchPaperCardComponent } from './research-paper-card/research-paper-card.component';
import { ResearchPapersComponent } from './_pages/research-papers/research-papers.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';
import { TimeTablePageComponent } from './time-table-page/time-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contests',
    component: ContestsPageComponent,
  },
  {
    path: 'research-papers',
    component: ResearchPapersComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'timetable',
    component: TimeTablePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
