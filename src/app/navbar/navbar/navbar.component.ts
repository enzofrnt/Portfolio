import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects/project.service';
import { Project, ProjectType } from '../../projects/project.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent implements OnInit {
  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
  }
}
