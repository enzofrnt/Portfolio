import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  darkMode$: Observable<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }
}
