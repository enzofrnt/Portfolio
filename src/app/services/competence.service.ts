import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Competence } from '../competences/competence.model';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  private _selectedCompetence$ = new BehaviorSubject<Competence | null>(null);
  selectedCompetence$ = this._selectedCompetence$.asObservable();

  constructor(private scrollService: ScrollService) {}

  setSelectedCompetence(
    competence: Competence | null,
    scrollToCompetence = false,
  ) {
    if (this.scrollService.isCurrentlyScrolling()) {
      return;
    }

    // Si on clique sur la même compétence, on la désélectionne
    if (this._selectedCompetence$.value?.title === competence?.title) {
      this._selectedCompetence$.next(null);
      return;
    }

    // Réinitialiser d'abord
    this._selectedCompetence$.next(null);

    // Attendre le prochain cycle de rendu
    setTimeout(() => {
      this._selectedCompetence$.next(competence);
      if (competence) {
        if (scrollToCompetence) {
          this.scrollService.scrollToElement(
            `competence-${competence.title.toLowerCase()}`,
          );
        } else {
          this.scrollService.scrollToFirstMatchingProject(competence.title);
        }
      }
    }, 50);
  }
}
