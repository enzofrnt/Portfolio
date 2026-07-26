import { Component, Input, OnInit } from '@angular/core';
import { ProjectCoreService } from '../../project-core.service';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: false,
})
export class ProjectsListComponent implements OnInit {
  @Input() includeIutProjects = true;
  @Input() includePersoProjects = true;
  @Input() includeCnamProjects = true;

  iutProjects: Project[] = [];
  persoProjects: Project[] = [];
  cnamProjects: Project[] = [];

  constructor(private projectService: ProjectCoreService) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
    this.cnamProjects = projectsByType[ProjectType.CNAM];
  }
}
