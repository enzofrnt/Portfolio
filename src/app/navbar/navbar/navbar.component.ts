import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, ProjectType } from '../../projects/project.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  iutProjects: Project[] = [];
  persoProjects: Project[] = [];
  darkMode$: Observable<boolean>;

  constructor(
    private darkModeService: DarkModeService,
    private projectService: ProjectService,
  ) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];
  }
}
