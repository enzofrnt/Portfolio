import { Component } from '@angular/core';
import { CompetencesComponent } from '../../../competences/competence/competence.component';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-opti-algo',
  standalone: false,
  templateUrl: './opti-algo.component.html',
  styleUrl: './opti-algo.component.scss',
})
export class OptiAlgoComponent implements Project {
  id = 'opti-algo';
  name = "Optimisation d'algorithmes";
  description =
    "Optimisation et comparaison d'algorithmes de recherche de chemins sur des données OpenStreetMap";
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/Projet-Algo-Qual';
  competences = [
    CompetencesComponent.competenceOptimiser,
    CompetencesComponent.competenceRealiser,
  ];
  keywords = [
    'Python',
    'Algorithmes',
    'Optimisation',
    'Dijkstra',
    'A*',
    'OpenStreetMap',
    'Pandas',
    'Polars',
  ];
}
