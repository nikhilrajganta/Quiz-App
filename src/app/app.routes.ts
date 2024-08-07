import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'questions/:id',
    component: ParentComponent,
  },
  {
    path: 'scorecard',
    component: ScorecardComponent,
  },

  {
    path: 'question/:id',
    component: ScorecardComponent,
  },
];
