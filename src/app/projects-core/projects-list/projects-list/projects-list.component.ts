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
  @Input() competenceLink = false;

  iutProjects: Project[] = [];
  persoProjects: Project[] = [];

  highlightedCompetence: Competence | null = null;

  selectedProjects: Project[] = [];

  isResetting = false;

  private subscription!: Subscription;

  constructor(
    private projectService: ProjectCoreService,
    private competencesService: CompetencesService,
  ) {}

  ngOnInit(): void {
    const projectsByType = this.projectService.getProjectsByType();
    this.iutProjects = projectsByType[ProjectType.IUT];
    this.persoProjects = projectsByType[ProjectType.PERSO];

    if (this.competenceLink) {
      this.subscription = this.competencesService.selectedCompetence$.subscribe(
        (action: SelectedCompetenceAction) => {
          this.highlightedCompetence = action.highlightProjects
            ? action.competence
            : null;

          this.updateSelectedProjects();
        },
      );
    }
  }

  private updateSelectedProjects() {
    if (!this.highlightedCompetence) {
      this.selectedProjects = [];
      this.isResetting = true;
      return;
    }

    this.isResetting = true;
    setTimeout(() => {
      this.isResetting = false;
      const allProjects = [...this.iutProjects, ...this.persoProjects];
      this.selectedProjects = allProjects.filter((project) =>
        project.competences?.some(
          (c) => c.title === this.highlightedCompetence!.title,
        ),
      );
    }, 50);
  }

  isHighlighted(project: Project): boolean {
    const result = this.selectedProjects.includes(project);
    return result;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
