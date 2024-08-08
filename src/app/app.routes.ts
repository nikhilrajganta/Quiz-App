import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ParentComponent } from './parent/parent.component';
import { AnswersScreenComponent } from './answers-screen/answers-screen.component';

export const routes: Routes = [
  {
    path: 'home',
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
    path : 'answers', 
    component: AnswersScreenComponent
  }
];
