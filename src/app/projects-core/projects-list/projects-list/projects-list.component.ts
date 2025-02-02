import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Competence } from '../../../competences/competence.model';
import { CompetencesService } from '../../../services/competence.service';
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
      (competence) => {
        // Réinitialiser d'abord
        this.highlightedCompetence = null;

        // Attendre le prochain cycle de rendu
        setTimeout(() => {
          this.highlightedCompetence = competence;
        }, 50);
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
