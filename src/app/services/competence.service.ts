import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Competence } from '../competences/competence.model';
import { ScrollService } from './scroll.service';

export interface SelectedCompetenceAction {
  competence: Competence | null;
  highlightProjects: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  private _selectedCompetence$ = new BehaviorSubject<SelectedCompetenceAction>({
    competence: null,
    highlightProjects: false,
  });
  selectedCompetence$ = this._selectedCompetence$.asObservable();

  constructor(private scrollService: ScrollService) {}

  setSelectedCompetence(
    competence: Competence | null,
    scrollToCompetence = false,
  ) {
    const highlightProjects = !scrollToCompetence;

    // On récupère la compétence actuellement sélectionnée
    const current = this._selectedCompetence$.getValue().competence;
    const sameCompetence =
      current &&
      competence &&
      current.title.toLowerCase() === competence.title.toLowerCase();

    if (competence) {
      if (sameCompetence) {
        // Dans le cas où la même compétence est sélectionnée, on force la réémission
        this._selectedCompetence$.next({ competence: null, highlightProjects });
        setTimeout(() => {
          if (scrollToCompetence) {
            this.scrollService.scrollToElement(
              `competence-${competence.title.toLowerCase()}`,
              100,
            );
          }
          this._selectedCompetence$.next({ competence, highlightProjects });
        }, 50);
      } else {
        // Cas normal : réinitialisation puis mise à jour
        this._selectedCompetence$.next({ competence: null, highlightProjects });
        if (scrollToCompetence) {
          this.scrollService.scrollToElement(
            `competence-${competence.title.toLowerCase()}`,
            100,
          );
          this._selectedCompetence$.next({ competence, highlightProjects });
        } else {
          setTimeout(() => {
            this._selectedCompetence$.next({ competence, highlightProjects });
            setTimeout(() => {
              this.scrollService.scrollToFirstMatchingProject(competence.title);
            }, 150);
          }, 50);
        }
      }
    }
  }
}
