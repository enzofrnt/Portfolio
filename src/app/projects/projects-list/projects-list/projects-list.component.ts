import { Component, OnInit } from '@angular/core';
import { Project, ProjectType } from '../../project.model';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
  }
}
