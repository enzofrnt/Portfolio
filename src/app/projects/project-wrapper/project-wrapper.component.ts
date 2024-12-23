import { Component } from '@angular/core';
import { Project, ProjectType } from '../project.model';
import { Input } from '@angular/core';

@Component({
    selector: 'app-project-wrapper',
    templateUrl: './project-wrapper.component.html',
    styleUrl: './project-wrapper.component.scss',
    standalone: false
})
export class ProjectWrapperComponent {
  @Input() project: Project = {
    id: '',
    name: '',
    description: '',
    type: ProjectType.PERSO,
    link: '',
  };
}
