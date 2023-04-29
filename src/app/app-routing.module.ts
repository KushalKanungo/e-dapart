import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsPageComponent } from './contests-page/contests-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResearchPaperCardComponent } from './research-paper-card/research-paper-card.component';
import { ResearchPapersComponent } from './_pages/research-papers/research-papers.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
