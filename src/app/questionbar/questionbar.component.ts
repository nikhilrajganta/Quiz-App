import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuiz, Options } from '../quiz-service.service';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-questionbar',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './questionbar.component.html',
  styleUrl: './questionbar.component.scss',
})
export class QuestionbarComponent {
  choosed_ans: Array<Options> = [];
  @Input() question = {
    id: '2',
    Questions: 'Which of these are planets in our solar system?',
    question_type: 'MCA',
    Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  };

  @Input() answer: any;
  @Output() AnsEvent = new EventEmitter<any>();
  testsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testsForm = this.fb.group({
      option: this.fb.array(
        this.question.Choices.map(() => this.fb.control(false))
      ),
    });
  }

  ngOnChanges() {
    console.log(this.answer);
    if (!this.answer) {
      this.testsForm.reset();
    }

    this.testsForm.patchValue(this.answer);
  }

  //emitting the event to parent
  pushToParent() {
    let response: any = this.testsForm.value;
    this.AnsEvent.emit(response);
    console.log(response);
  }
}
