import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Options } from '../quiz-service.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-overview',
  standalone: true,
  imports: [
    MatRadioModule,
    MatCardModule,
    MatRadioModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './question-overview.component.html',
  styleUrl: './question-overview.component.scss',
})
export class QuestionOverviewComponent {
  choosed_ans: Array<Options> = [];

  @Input() radioQuestion = {
    id: '1',
    Questions: 'What is the capital of France?',
    question_type: 'MCQ',
    Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
  };

  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      answer: '',
    }); // View -> Model
  }

  optionChoosen() {
    console.log(this.testForm.value);
  }
}
