import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QuestionOverviewComponent } from './question-overview/question-overview.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { QuestionbarComponent } from './questionbar/questionbar.component';
import { StructdirComponent } from './structdir/structdir.component';
import { ParentComponent } from './parent/parent.component';
import { QuestionNavigateComponent } from './question-navigate/question-navigate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, QuestionOverviewComponent],
  imports: [
    RouterOutlet,
    RouterLink,
    ScorecardComponent,
    QuestionOverviewComponent,
    QuestionbarComponent,
    StructdirComponent,
    ParentComponent,
    QuestionNavigateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';

  // ngOnInit() {
  //   const duration = 5000; // in milliseconds

  //   confetti({
  //     particleCount: 100,
  //     spread: 160,
  //     origin: { y: 0.6 },
  //   });

  //   // Clear confetti after a certain duration
  //   setTimeout(() => confetti.reset(), duration);
  // }
}
