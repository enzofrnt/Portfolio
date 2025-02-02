import { Component, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-wrapper',
  templateUrl: './project-wrapper.component.html',
  styleUrl: './project-wrapper.component.scss',
  standalone: false,
})
export class ProjectWrapperComponent {
  @Input() project!: Project;
}
