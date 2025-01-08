import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectType } from '../../project.model';
import { ProjectCoreService } from '../../project-core.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: false,
})
export class ProjectsListComponent implements OnInit {
  @Input() includeIutProjects = true;
  @Input() includePersoProjects = true;
  @Input() includeCompetences = false;

  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  constructor(private projectService: ProjectCoreService) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
  }
}
