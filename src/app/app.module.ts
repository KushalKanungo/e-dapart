import { NgModule } from '@angular/core';
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
import { SkeletonModule } from 'primeng/skeleton';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
