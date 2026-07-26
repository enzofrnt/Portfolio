import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  age: number = Math.floor(
    (new Date().getTime() - new Date('2004-09-13').getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  );
}
