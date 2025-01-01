import { Component, OnInit } from '@angular/core';
import { ProjectCoreService } from '../../projects-core/project-core.service';
import { Project, ProjectType } from '../../projects-core/project.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements OnInit {
  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  constructor(private projectService: ProjectCoreService) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
  }
}
