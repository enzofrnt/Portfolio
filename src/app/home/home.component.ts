import { Component } from '@angular/core';
import { CompetencesComponent } from '../competences/competence/competence.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  protected readonly CompetencesComponent = CompetencesComponent;
}
