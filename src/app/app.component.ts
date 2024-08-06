import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionOverviewComponent } from "./question-overview/question-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quiz-app';
}
