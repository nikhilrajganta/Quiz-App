import { Component } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionbarComponent } from '../questionbar/questionbar.component';
import { QuestionOverviewComponent } from '../question-overview/question-overview.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [QuestionbarComponent, QuestionOverviewComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  question: any = [];
  submit: any;

  id: any;
  QuestionsData: Array<IQuiz> = [];

  constructor(
    public quizservice: QuizServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string; // From URL // 1
    this.id = +this.id;
    this.question = this.quizservice.QuestionsData[this.id - 1];
  }

  // After Initialization of the component

  nextQuestion() {
    if (this.id < this.quizservice.QuestionsData.length) {
      this.id++;
      this.question = this.quizservice.QuestionsData[this.id - 1];
      this.router.navigate([`questions/${this.id}`]);
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.router.navigate(['/score']);
  }
}
