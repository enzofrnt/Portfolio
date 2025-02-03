import { Component } from '@angular/core';
import { CompetencesComponent } from '../../../competences/competence/competence.component';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
  standalone: false,
})
export class MemoryComponent implements Project {
  id = 'memory';
  name = 'Memory';
  description = "Un jeu de memory pour s'amuser et tester sa mémoire";
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/Memory';
  competences = [CompetencesComponent.competenceRealiser];
  keywords = ['Java FX', 'Jeux de mémoire', 'Jeux', 'MVC'];
}
