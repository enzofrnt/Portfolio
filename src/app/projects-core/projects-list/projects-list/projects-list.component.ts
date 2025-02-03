import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Competence } from '../../../competences/competence.model';
import {
  CompetencesService,
  SelectedCompetenceAction,
} from '../../../services/competence.service';
import { ProjectCoreService } from '../../project-core.service';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  standalone: false,
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  @Input() includeIutProjects = true;
  @Input() includePersoProjects = true;
  @Input() includeCompetences = false;

  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  highlightedCompetence: Competence | null = null;

  private subscription!: Subscription;

  constructor(
    private projectService: ProjectCoreService,
    private competencesService: CompetencesService,
  ) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];

    this.subscription = this.competencesService.selectedCompetence$.subscribe(
      (action: SelectedCompetenceAction) => {
        this.highlightedCompetence = action.highlightProjects
          ? action.competence
          : null;
      },
    );
  }

  isHighlighted(project: Project): boolean {
    if (!this.highlightedCompetence || !project.competences) {
      return false;
    }
    return project.competences.some(
      (c) => c.title === this.highlightedCompetence!.title,
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
