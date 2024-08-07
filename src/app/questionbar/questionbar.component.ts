import { Component, Input } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { Router } from '@angular/router';
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
  QuestionsData: Array<IQuiz> = [];

  isLoading: boolean = true;
  msg = '';

  constructor(public quizservice: QuizServiceService, private router: Router) {}

  // After Initialization of the component
  @Input() question = {
    id: '2',
    Questions: 'Which of these are planets in our solar system?',
    question_type: 'MCA',
    Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  };
}
