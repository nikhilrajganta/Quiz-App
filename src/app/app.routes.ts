import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'scorecard',
    component: ScorecardComponent,
  },
];
