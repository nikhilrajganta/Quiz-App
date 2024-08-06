import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QuestionOverviewComponent } from "./question-overview/question-overview.component";
// import { RouterLink, RouterOutlet } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, QuestionOverviewComponent],
  imports: [RouterOutlet, RouterLink, ScorecardComponent , QuestionOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';
}
