import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null'),
  );

  constructor() {
    effect(() => {
      window.localStorage.setItem(
        'darkModeSignal',
        JSON.stringify(this.darkModeSignal()),
      );
    });
  }

  updateDarkMode(): void {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'null' : 'dark'));
  }
}
