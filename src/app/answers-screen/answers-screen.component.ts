import { Component } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers-screen',
  standalone: true,
  imports: [],
  templateUrl: './answers-screen.component.html',
  styleUrl: './answers-screen.component.scss',
})
export class AnswersScreenComponent {allAnswers: any;

  constructor(public dataService: QuizServiceService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.onLoad();
  }
  onLoad() {
    this.allAnswers = this.dataService.getAllAnswers();
  }}
