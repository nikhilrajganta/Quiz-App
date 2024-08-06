import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ScorecardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';
}
