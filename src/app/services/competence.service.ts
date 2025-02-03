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

    const highlightProjects = !scrollToCompetence;
    const highlightCompetence = !scrollToProjects;

    if (competence) {
      const currentAction = this._selectedCompetence$.getValue();
      const sameCompetence =
        currentAction.competence?.title === competence.title;

      console.log('CompetenceService - État actuel:', {
        competenceActuelle: currentAction.competence?.title,
        memeCompetence: sameCompetence,
      });

      if (!sameCompetence) {
        this._selectedCompetence$.next({
          competence: null,
          highlightProjects,
          highlightCompetence,
        });
      }

      if (scrollToCompetence) {
        // Cas 1: Clic sur label - scroll vers compétence
        this.zone.run(() => {
          console.log(
            'CompetenceService - Émission nouvelle action (scrollToCompetence):',
            {
              competence: competence.title,
              highlightProjects: false,
              highlightCompetence: true,
            },
          );

          this._selectedCompetence$.next({
            competence,
            highlightProjects: false,
            highlightCompetence: true,
          });
        });
        setTimeout(() => {
          const competenceElement = document.querySelector(
            `#competence-${competence.title.toLowerCase()}`,
          );
          if (competenceElement) {
            competenceElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }, 100);
      } else if (scrollToProjects) {
        // Cas 2: Clic sur compétence - scroll vers projets
        this.zone.run(() => {
          console.log(
            'CompetenceService - Émission nouvelle action (scrollToProjects):',
            {
              competence: competence.title,
              highlightProjects: true,
              highlightCompetence: false,
            },
          );

          this._selectedCompetence$.next({
            competence,
            highlightProjects: true,
            highlightCompetence: false,
          });
        });
        setTimeout(() => {
          const firstProjectWithCompetence = document.querySelector(
            `.project-card.selected`,
          );
          if (firstProjectWithCompetence) {
            firstProjectWithCompetence.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }, 150);
      } else {
        // Cas 3: Autre cas (hover, etc.)
        this.zone.run(() => {
          this._selectedCompetence$.next({
            competence,
            highlightProjects,
            highlightCompetence,
          });
        });
      }
    }
  }
}
