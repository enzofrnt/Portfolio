import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  darkMode$: Observable<boolean> = new Observable<boolean>();

  constructor() {}

  onToggle(): void {}
}
