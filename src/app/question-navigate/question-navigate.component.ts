import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-navigate',
  standalone: true,
  imports: [],
  templateUrl: './question-navigate.component.html',
  styleUrl: './question-navigate.component.scss',
})
export class QuestionNavigateComponent {
  @Input() questionNumber!: number;
  @Input() questionId!: number;

  constructor(private router: Router) {}
  @Output() switchQuestion = new EventEmitter<number>();

  navigateToQuestion() {
    this.switchQuestion.emit(this.questionId);
  }
}
