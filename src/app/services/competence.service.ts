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
    console.log('CompetenceService - setSelectedCompetence appelé:', {
      competence: competence?.title,
      scrollToCompetence,
      scrollToProjects,
    });

    this.zone.run(() => {
      this._selectedCompetence$.next({
        competence,
        highlightProjects: scrollToProjects,
        highlightCompetence: scrollToCompetence,
      });
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
        document
          .querySelector('.project-card.selected')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }
}
