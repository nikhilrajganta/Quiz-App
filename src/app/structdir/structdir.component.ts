import { Component, Input } from '@angular/core';
import { QuestionOverviewComponent } from '../question-overview/question-overview.component';
import { QuestionbarComponent } from '../questionbar/questionbar.component';
import { IQuiz } from '../quiz-service.service';

@Component({
  selector: 'app-structdir',
  standalone: true,
  imports: [QuestionOverviewComponent, QuestionbarComponent],
  templateUrl: './structdir.component.html',
  styleUrl: './structdir.component.scss',
})
export class StructdirComponent {
  allitems: Array<IQuiz> = [];

  @Input() submit = {
    id: '2',
    Questions: 'Which of these are planets in our solar system?',
    question_type: 'MCA',
    Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  };
}
