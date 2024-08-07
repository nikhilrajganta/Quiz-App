import { Component, Input } from '@angular/core';
import { IQuiz, Options, QuizServiceService } from '../quiz-service.service';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-questionbar',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, MatCardModule],
  templateUrl: './questionbar.component.html',
  styleUrl: './questionbar.component.scss',
})
export class QuestionbarComponent {
  choosed_ans: Array<Options> = [];
  @Input() question = {
    id: '2',
    Questions: 'Which of these are planets in our solar system?',
    question_type: 'MCA',
    Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  };
}
