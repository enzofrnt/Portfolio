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
    const highlightProjects = !scrollToCompetence;
    console.log('highlightProjects', highlightProjects);
    const highlightCompetence = !scrollToProjects;
    console.log('highlightCompetence', highlightCompetence);

    console.log('setSelectedCompetence appelé avec:', {
      competence,
      scrollToCompetence,
      scrollToProjects,
    });

    if (competence) {
      // Réinitialisation initiale
      this._selectedCompetence$.next({
        competence: null,
        highlightProjects,
        highlightCompetence,
      });

      if (scrollToCompetence) {
        // Cas 1: Clic sur label - scroll vers compétence
        this.scrollService.scrollToElement(
          `competence-${competence.title.toLowerCase()}`,
          100,
        );
        setTimeout(() => {
          this.zone.run(() => {
            this._selectedCompetence$.next({
              competence,
              highlightProjects: false,
              highlightCompetence: true,
            });
          });
        }, 1000);
      } else if (scrollToProjects) {
        // Cas 2: Clic sur compétence - scroll vers projets
        this.zone.run(() => {
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
