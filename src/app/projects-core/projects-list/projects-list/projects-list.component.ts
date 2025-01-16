import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project, ProjectType } from '../../project.model';
import { ProjectCoreService } from '../../project-core.service';
import { Competence } from '../../../competences/competence.model';
import { Subscription } from 'rxjs';
import { CompetencesService } from '../../../services/competence.service';

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
      (competence) => {
        if (this.highlightedCompetence && !competence) {
          requestAnimationFrame(() => {
            this.highlightedCompetence = null;
          });
        } else {
          this.highlightedCompetence = competence;
        }
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
