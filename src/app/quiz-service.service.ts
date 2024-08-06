import { Injectable } from '@angular/core';

export interface IQuiz {
  id: string;
  Questions: string;
  question_type: string[];
  Choices: string[];
}

@Injectable({
  providedIn: 'root',
})
export class QuizServiceService {
  QuestionsData: Array<IQuiz> = [
    {
      id: '1',
      Questions: 'What is the capital of France?',
      question_type: ['MCQ'],
      Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    },
    {
      id: '2',
      Questions: 'Which of these are planets in our solar system?',
      question_type: ['MCA'],
      Choices: ['Earth', 'Moon', 'Mars', 'Jupiter', 'Sun', 'Pluto'],
    },
    {
      id: '3',
      Questions: 'What is the largest ocean on Earth?',
      question_type: ['MCQ'],
      Choices: [
        'Pacific Ocean',
        'Atlantic Ocean',
        'Indian Ocean',
        'Arctic Ocean',
      ],
    },
    {
      id: '4',
      Questions: 'Which of these are programming languages?',
      question_type: ['MCA'],
      Choices: ['Java', 'Python', 'C++', 'English', 'JavaScript', 'Ruby'],
    },
    {
      id: '5',
      Questions: 'What is the chemical symbol for gold?',
      question_type: ['MCQ'],
      Choices: ['Au', 'Ag', 'Cu', 'Fe'],
    },
  ];

  constructor() {}
}
