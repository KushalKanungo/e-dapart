import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsPageComponent } from './contests-page/contests-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contests',
    component: ContestsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
