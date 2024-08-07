import { Component } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionbarComponent } from '../questionbar/questionbar.component';
import { QuestionOverviewComponent } from '../question-overview/question-overview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [QuestionbarComponent, QuestionOverviewComponent , CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {


  question: any = [];
  submit: any;
  hiddenValue : any = "visible"  ; 
  id: any;
  QuestionsData: Array<IQuiz> = [];

  constructor(
    public quizservice: QuizServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string; 
    this.id = +this.id;
    this.question = this.quizservice.QuestionsData[this.id - 1];
  }


  nextQuestion() {
    if (this.id < this.quizservice.QuestionsData.length) {
      this.id++;
      this.question = this.quizservice.QuestionsData[this.id - 1];
      this.router.navigate([`questions/${this.id}`]); }
   
  }

  prevQuestion() {
    if (this.id > 1) {
      this.id--;
      this.question = this.quizservice.QuestionsData[this.id - 1];
      this.router.navigate([`questions/${this.id}`]);
    }
  }

  isFirstQuestion(): boolean {
    return this.id === 1;
  }

  isLastQuestion(): boolean {
    return this.id === this.quizservice.QuestionsData.length;
  }
  submitQuestions() {
    this.router.navigate(['/scorecard']);
  }

  
}
