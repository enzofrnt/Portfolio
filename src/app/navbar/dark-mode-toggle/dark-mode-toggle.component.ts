import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
    selector: 'app-dark-mode-toggle',
    templateUrl: './dark-mode-toggle.component.html',
    styleUrls: ['./dark-mode-toggle.component.scss'],
    standalone: false
})
export class DarkModeToggleComponent {
  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode(): void {
    this.darkModeService.updateDarkMode();
  }
}
