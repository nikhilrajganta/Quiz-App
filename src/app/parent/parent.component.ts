import { Component } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionbarComponent } from '../questionbar/questionbar.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [QuestionbarComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  question: any = [];
  constructor(
    public quizService: QuizServiceService,
    private route: ActivatedRoute
  ) {
    let id: any = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.question = this.quizService.question[id - 1];
    console.log(this.question);
  }
}
