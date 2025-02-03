import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Competence } from '../competences/competence.model';
import { ScrollService } from './scroll.service';

export interface SelectedCompetenceAction {
  competence: Competence | null;
  highlightProjects: boolean;
  highlightCompetence: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  private _selectedCompetence$ = new BehaviorSubject<SelectedCompetenceAction>({
    competence: null,
    highlightProjects: false,
    highlightCompetence: false,
  });
  selectedCompetence$ = this._selectedCompetence$.asObservable();

  constructor(
    private scrollService: ScrollService,
    private zone: NgZone,
  ) {}

  setSelectedCompetence(
    competence: Competence | null,
    scrollToCompetence = false,
    scrollToProjects = false,
  ) {
    console.log('CompetenceService - DÉBUT setSelectedCompetence:', {
      competence: competence?.title,
      scrollToCompetence,
      scrollToProjects,
    });

    this.zone.run(() => {
      console.log('CompetenceService - AVANT émission action:', {
        competence: competence?.title,
        highlightProjects: scrollToProjects,
        highlightCompetence: scrollToCompetence,
      });

      this._selectedCompetence$.next({
        competence,
        highlightProjects: scrollToProjects,
        highlightCompetence: scrollToCompetence,
      });

      console.log('CompetenceService - APRÈS émission action');
    });

    if (scrollToCompetence && competence) {
      setTimeout(() => {
        const competenceElement = document.querySelector(
          `#competence-${competence.title.toLowerCase()}`,
        );
        competenceElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }

    if (scrollToProjects && competence) {
      setTimeout(() => {
        const projectElement = document.querySelector('.project-card.selected');
        console.log('CompetenceService - Élément projet trouvé:', {
          found: !!projectElement,
          element: projectElement,
        });

        projectElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }
}
