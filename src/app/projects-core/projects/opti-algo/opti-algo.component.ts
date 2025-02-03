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
  name = "Optimisation d'algorithme";
  type = ProjectType.IUT;
  description =
    "Optimisation d'algorithme de recherche de chemin optimal dans un graphe";
  link = 'https://github.com/enzofrnt/Projet-Algo-Qual';
  competences = [
    CompetencesComponent.competenceOptimiser,
    CompetencesComponent.competenceRealiser,
  ];
  keywords = ['algorithme', 'optimisation', 'graphe'];
}
