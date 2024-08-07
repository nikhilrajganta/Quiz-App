import { Component } from '@angular/core';
import { IQuiz, Options, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionbarComponent } from '../questionbar/questionbar.component';
import { QuestionOverviewComponent } from '../question-overview/question-overview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [QuestionbarComponent, QuestionOverviewComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  question: any = [];
  submit: any;
  hiddenValue: any = 'visible';
  id: any;
  QuestionsData: any = [];
  choosed_answers: Array<Options> = [];

  constructor(
    public quizservice: QuizServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadQuestions();
  }

  // loadQuestions() {
  //   this.quizservice
  //     .getAllquestions()
  //     .then((data) => (this.QuestionsData = data));
  // }

  loadQuestions() {
    this.id = this.route.snapshot.paramMap.get('id') as string; // From URL // 1
    this.id = +this.id;
    this.quizservice.getAllquestions().then((data) => {
      this.QuestionsData = data;
      this.question = this.QuestionsData[this.id - 1];
    });
  }

  // After Initialization of the component

  nextQuestion() {
    if (this.id < this.QuestionsData.length) {
      this.id++;
      this.question = this.QuestionsData[this.id - 1];
      this.router.navigate([`questions/${this.id}`]);
    }
  }

  prevQuestion() {
    if (this.id > 1) {
      this.id--;
      this.question = this.QuestionsData[this.id - 1];
      this.router.navigate([`questions/${this.id}`]);
    }
  }

  isFirstQuestion(): boolean {
    return this.id === 1;
  }

  // Method to check if the current question is the last one
  isLastQuestion(): boolean {
    return this.id === this.QuestionsData.length;
  }

  submitQuestions() {
    this.router.navigate(['/scorecard']);
  }
}
