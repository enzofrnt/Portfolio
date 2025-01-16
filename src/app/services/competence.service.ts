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
      return; // Ignorer les clics pendant le scroll
    }

    // Si on clique sur la même compétence, on la désélectionne
    if (this._selectedCompetence$.value === competence) {
      this._selectedCompetence$.next(null);
      return;
    }

    this._selectedCompetence$.next(competence);
    if (competence) {
      if (scrollToCompetence) {
        this.scrollService.scrollToElement(
          `competence-${competence.title.toLowerCase()}`,
        );
      } else {
        setTimeout(() => {
          this.scrollService.scrollToFirstMatchingProject(competence.title);
        }, 100);
      }
    }
  }
}
