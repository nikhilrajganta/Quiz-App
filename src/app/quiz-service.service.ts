import { Injectable } from '@angular/core';

export interface IQuiz {
  id: string;
  Questions: string;
  question_type: string;
  Choices: string[];
}
export interface IAnswers {
  id: string;
  correct_answer: string;
}
export interface Options {
  id: string;
  choosed_answers: string[];
}

@Injectable({
  providedIn: 'root',
})
export class QuizServiceService {
  currentIndex: number = 0;

  QuestionsData: Array<IQuiz> = [];
  // [
  //   {
  //     id: '1',
  //     Questions: 'What is the capital of France?',
  //     question_type: 'MCQ',
  //     Choices: ['Paris', 'London', 'Berlin', 'Madrid'],
  //   },
  //   {
  //     id: '2',
  //     Questions: 'Which of these are planets in our solar system?',
  //     question_type: 'MCA',
  //     Choices: ['Earth', 'Moon', 'Mars', 'Jupiter'],
  //   },
  //   {
  //     id: '3',
  //     Questions: 'What is the largest ocean on Earth?',
  //     question_type: 'MCQ',
  //     Choices: [
  //       'Pacific Ocean',
  //       'Atlantic Ocean',
  //       'Indian Ocean',
  //       'Arctic Ocean',
  //     ],
  //   },
  //   {
  //     id: '4',
  //     Questions: 'Which of these are programming languages?',
  //     question_type: 'MCA',
  //     Choices: ['Java', 'Python', 'C++', 'English'],
  //   },
  //   {
  //     id: '5',
  //     Questions: 'What is the chemical symbol for gold?',
  //     question_type: 'MCQ',
  //     Choices: ['Au', 'Ag', 'Cu', 'Fe'],
  //   },
  // ];

  Answers: Array<IAnswers> = [
    {
      id: '1',
      correct_answer: 'Paris',
    },
    {
      id: '2',
      correct_answer: 'Earth',
    },
    {
      id: '3',
      correct_answer: 'Pacific Ocean',
    },
    {
      id: '4',
      correct_answer: 'Java',
    },
    {
      id: '5',
      correct_answer: 'Au',
    },
  ];
  question: any;

  constructor() {}

  API = `https://quiz-qch5.onrender.com`;

  // getAllquestions(): Promise<IQuiz[]> {
  //   return fetch(`${this.API}/questions/`).then((res) => res.json());
  // }

  getAllquestions(): Promise<IQuiz[]> {
    return fetch(`${this.API}/questions`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        this.QuestionsData = data; // Store the data in the service
        return this.QuestionsData;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Rethrow the error for further handling
      });
  }
}
