import { Component, Input } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: Project = {
    id: '',
    name: '',
    description: '',
    // path: '',
    type: ProjectType.PERSO,
  };
}
