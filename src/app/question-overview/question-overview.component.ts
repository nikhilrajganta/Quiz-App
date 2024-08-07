import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { QuizServiceService, IQuiz } from '../quiz-service.service';

@Component({
  selector: 'app-question-overview',
  standalone: true,
  imports: [MatRadioModule, MatCardModule],
  templateUrl: './question-overview.component.html',
  styleUrl: './question-overview.component.scss',
})
export class QuestionOverviewComponent implements OnInit {
  questions: Array<IQuiz> = [];
  // currentQuestion: IQuiz | null;
  // questions: IQuiz[] = [];
  currentQuestion: IQuiz | undefined;

  constructor(private quizService: QuizServiceService) {}
  // @Input() question = {
  //   id: '1',
  //   Questions: 'What is the capital of France?',
  //   question_type: 'MCQ',
  //   Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
  // };

  ngOnInit(): void {
    this.quizService.getAllquestions().then((questions) => {
      this.questions = questions;
      this.currentQuestion = this.questions[this.quizService.CurrQuesIdx()];
    });
  }

  nextQuestion(): void {
    this.quizService.incrementCurrQuesIdx();
    const index = this.quizService.CurrQuesIdx();
    if (index < this.questions.length) {
      this.currentQuestion = this.questions[index];
    } else {
      // Handle the end of the quiz
      console.log('Quiz Completed');
    }
  }
}
