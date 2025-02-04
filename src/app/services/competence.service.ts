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
      this._selectedCompetence$.next({
        competence: null,
        highlightProjects: false,
        highlightCompetence: false,
      });

      setTimeout(() => {
        this._selectedCompetence$.next({
          competence,
          highlightProjects: scrollToProjects,
          highlightCompetence: scrollToCompetence,
        });
        console.log('CompetenceService - Action émise');

        if (scrollToProjects && competence) {
          console.log(
            'CompetenceService - Préparation du scroll vers les projets',
          );

          // Premier scroll approximatif
          window.scrollBy({
            top: 800, // Scroll d'environ 800px
            behavior: 'smooth',
          });

          // Puis scroll précis après un délai
          setTimeout(() => {
            const selectedProjects = document.getElementsByClassName(
              'project-card selected',
            );
            if (selectedProjects.length > 0) {
              selectedProjects[0].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 500); // Attendre que le premier scroll soit terminé
        }
      }, 50);
    });

    if (scrollToCompetence && competence) {
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
    }
  }
}
