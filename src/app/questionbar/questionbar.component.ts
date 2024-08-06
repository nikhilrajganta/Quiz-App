import { Component } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionbar',
  standalone: true,
  imports: [],
  templateUrl: './questionbar.component.html',
  styleUrl: './questionbar.component.scss',
})
export class QuestionbarComponent {
  QuestionsData: Array<IQuiz> = [];

  isLoading: boolean = true;
  msg = '';

  constructor(public quizservice: QuizServiceService, private router: Router) {}

  // After Initialization of the component
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.quizservice
      .getAllquestions()
      .then((data) => {
        this.QuestionsData = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
