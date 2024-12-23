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
    this.darkModeSignal.update((value) => {
      const newTheme = value === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', newTheme); // html
      document.body.setAttribute('data-bs-theme', newTheme); // optionnel
      return newTheme;
    });
  }
}
