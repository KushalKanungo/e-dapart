import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { ChipsModule } from 'primeng/chips';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ContestsPageComponent } from './contests-page/contests-page.component';
import { ContestCardComponent } from './contest-card/contest-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResearchPapersComponent } from './_pages/research-papers/research-papers.component';
import { ResearchPaperCardComponent } from './research-paper-card/research-paper-card.component';
import { ContestLoadingCardComponent } from './contest-loading-card/contest-loading-card.component';
import { GoogleEmbedderComponent } from './google-embedder/google-embedder.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';
import { ReasearchPaperFormComponent } from './reasearch-paper-form/reasearch-paper-form.component';
import { ContestFormComponent } from './contest-form/contest-form.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';
import { MessageService } from 'primeng/api';
import { EventViewComponent } from './event-view/event-view.component';
import { ResearchViewComponent } from './research-view/research-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageCarouselComponent,
    FooterComponent,
    ContestsPageComponent,
    ContestCardComponent,
    HomePageComponent,
    ResearchPapersComponent,
    ResearchPaperCardComponent,
    ContestLoadingCardComponent,
    GoogleEmbedderComponent,
    CalendarComponent,
    TimetableFormComponent,
    ReasearchPaperFormComponent,
    ContestFormComponent,
    NoticeFormComponent,
    EventViewComponent,
    ResearchViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenubarModule,
    ScrollPanelModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    SkeletonModule,
    PaginatorModule,
    FullCalendarModule,
    DynamicDialogModule,
    SpeedDialModule,
    ChipsModule,
    ChipModule,
    AvatarModule,
    ToastModule
  ],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
