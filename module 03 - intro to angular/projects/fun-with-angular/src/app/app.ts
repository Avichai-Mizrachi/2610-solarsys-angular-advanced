import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Data (state)
  readonly keyword = signal('');

  readonly results = signal<string[]>([]);

  readonly isBusy = signal(false);

  // Actions (methods)

  search() {
    console.log('searching', this.keyword());
    this.isBusy.set(true);
    this.results.set([]);
    setTimeout(() => {
      this.isBusy.set(false);
      this.results.set([
        this.keyword().toUpperCase(), 
        this.keyword().toLowerCase(), 
        `** ${this.keyword()} **`
      ]);
    }, 3000);
  }

  setKeyword(value: string) {
    this.keyword.set(value);
    console.log('Setting keyword', this.keyword());

  }
}


// 1. new to the component class
// 2. Clone the component template into the host element
// 2.5 - also add the component css
// 3. Connect Bindings
