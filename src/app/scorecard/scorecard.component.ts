import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-scorecard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './scorecard.component.html',
  styleUrl: './scorecard.component.scss',
})
export class ScorecardComponent {
  score = 20;

  ngOnInit() {
    const duration = 10000; // in milliseconds

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }
}
