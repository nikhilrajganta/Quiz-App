import { Component } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    public quizService: QuizServiceService,
    private route: ActivatedRoute
  ) {
    let id: any = this.route.snapshot.paramMap.get('id')// From URL

    console.log(id);

    this.question = this.quizService.QuestionsData[id - 1];
    console.log(this.question);
  }
}
