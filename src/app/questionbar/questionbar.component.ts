import { Component, Input } from '@angular/core';
import { IQuiz, QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() question = {
    id: '2',
    Questions: 'Which of these are planets in our solar system?',
    question_type: 'MCA',
    Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  };
  id = 0 ; 
  QuestionsData: Array<IQuiz> = [];

  isLoading: boolean = true;
  msg = '';

  constructor(public quizservice: QuizServiceService, private router: Router  , private route: ActivatedRoute) 
    {
      let currentQuestionIndex: any = this.route.snapshot.paramMap.get(
        'id'
      ) as string; // From URL
      this.id = currentQuestionIndex;
    }
  

  // After Initialization of the component
 
  nextQuestion() {
    if (this.id < this.quizservice.QuestionsData.length - 1) {
      this.id++;
      this.question = this.quizservice.QuestionsData[this.id];
  
      this.router.navigate([`question/${this.id}`]);
    } else {
      this.onSubmit();
    }}
  
    onSubmit() {
      this.router.navigate(['/score']);
    }
}
