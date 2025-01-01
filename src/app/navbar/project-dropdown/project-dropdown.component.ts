import { Component, Input } from '@angular/core';
import { Project } from '../../projects-core/project.model';

@Component({
  selector: 'app-project-dropdown',
  templateUrl: './project-dropdown.component.html',
  styleUrls: ['./project-dropdown.component.scss'],
  standalone: false,
})
export class ProjectDropdownComponent {
  @Input() projects: Project[] = [];
  @Input() header: string = '';
}
