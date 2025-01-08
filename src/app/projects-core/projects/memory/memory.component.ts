import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';
import { CompetencesComponent } from '../../../competences/competence/competence.component';

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
}
