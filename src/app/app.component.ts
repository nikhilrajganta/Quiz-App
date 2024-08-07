import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QuestionOverviewComponent } from './question-overview/question-overview.component';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { QuestionbarComponent } from './questionbar/questionbar.component';
import { StructdirComponent } from './structdir/structdir.component';
import { ParentComponent } from "./parent/parent.component";

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
    ParentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';
}
