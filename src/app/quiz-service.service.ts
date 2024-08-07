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
  choosed_ans: Array<Options> = [];

  constructor() {}

  API = `https://quiz-qch5.onrender.com`;

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

  patchAnswers(answer: any) {
    const ansIndx = this.choosed_ans.findIndex((ans) => ans.id == answer.id);

    if (ansIndx < 0) {
      this.choosed_ans.push(answer);
    } else {
      this.choosed_ans[ansIndx] = answer;
    }

    console.log('❤🧡', answer, this.choosed_ans);
  }

  getAnsByQuestion(currentQuestion: any) {
    return this.choosed_ans.find((ans) => ans.id == currentQuestion.id);
  }
}
