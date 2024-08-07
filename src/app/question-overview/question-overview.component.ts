import { Component, Input, input, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { QuizServiceService, IQuiz } from '../quiz-service.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-overview',
  standalone: true,
  imports: [MatRadioModule, MatCardModule, MatRadioModule, RouterLink],
  templateUrl: './question-overview.component.html',
  styleUrl: './question-overview.component.scss',
})
export class QuestionOverviewComponent {
  questions: Array<IQuiz> = [];
  // currentQuestion: IQuiz | null;
  // questions: IQuiz[] = [];
  // currentQuestion: IQuiz | undefined;
  @Input() radioQuestion = {
    id: '1',
    Questions: 'What is the capital of France?',
    question_type: 'MCQ',
    Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
  };
  id = 0;
  QuestionsData: Array<IQuiz> = [];

  isLoading: boolean = true;
  msg = '';

  constructor(
    public quizservice: QuizServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let currentQuestionIndex: any = this.route.snapshot.paramMap.get(
      'id'
    ) as string; // From URL
    this.id = currentQuestionIndex;
  }

  // After Initialization of the component

  nextQuestion() {
    if (this.id < this.quizservice.QuestionsData.length - 1) {
      this.id++;
      this.radioQuestion = this.quizservice.QuestionsData[this.id];

      this.router.navigate([`questions/${this.id}`]);
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.router.navigate(['/score']);
  }

  // @Input() question = {
  //   id: '1',
  //   Questions: 'What is the capital of France?',
  //   question_type: 'MCQ',
  //   Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
  // };

  // ngOnInit(): void {
  //   this.quizService.getAllquestions().then((questions) => {
  //     this.questions = questions;
  //     this.currentQuestion = this.questions[this.quizService.CurrQuesIdx()];
  //   });
  // }

  // nextQuestion(): void {
  //   this.quizService.incrementCurrQuesIdx();
  //   const index = this.quizService.CurrQuesIdx();
  //   if (index < this.questions.length) {
  //     this.currentQuestion = this.questions[index];
  //   } else {
  //     // Handle the end of the quiz
  //     console.log('Quiz Completed');
  //   }
  // }
}
