import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'app-stat-card',
  styleUrl: './stat-card.css',
  templateUrl: './stat-card.html',
  host: {
    class: 'card',
    '[class.highlight]': 'highlight()',
  },
})
export class StatCard {
  readonly label = input.required<string>();
  readonly value = input.required<number>();
  readonly unit = input.required<string>();
  readonly format = input('1.0-0');
  readonly highlight = input(false);
}
