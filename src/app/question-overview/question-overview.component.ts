import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-question-overview',
  standalone: true,
  imports: [MatRadioModule , MatCardModule],
  templateUrl: './question-overview.component.html',
  styleUrl: './question-overview.component.scss'
})
export class QuestionOverviewComponent {

}
