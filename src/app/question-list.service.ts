import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

const API = 'https://quiz-qch5.onrender.com';

export class QuestionListService {

  constructor() { }



  // getMovieByIdP(id: string): Promise<any> {
  //   return fetch(`${API}/movies/${id}`).then((res) => res.json());
  // }
}
