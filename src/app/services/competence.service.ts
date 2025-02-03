import { Injectable, NgZone } from '@angular/core';
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

  constructor(
    private scrollService: ScrollService,
    private zone: NgZone,
  ) {}

  setSelectedCompetence(
    competence: Competence | null,
    scrollToCompetence = false,
  ) {
    const highlightProjects = !scrollToCompetence;
    console.log('setSelectedCompetence appelé avec:', {
      competence,
      scrollToCompetence,
    });

    // Récupération de la compétence actuellement sélectionnée
    const current = this._selectedCompetence$.getValue().competence;
    console.log('Compétence actuelle:', current);

    const sameCompetence =
      current &&
      competence &&
      current.title.toLowerCase() === competence.title.toLowerCase();
    console.log('Même compétence ? :', sameCompetence);

    if (competence) {
      if (sameCompetence) {
        // Dans le cas où la même compétence est sélectionnée, on force la réémission
        console.log(
          'Même compétence détectée. Réinitialisation de la sélection pour forcer le rafraîchissement.',
        );
        this._selectedCompetence$.next({ competence: null, highlightProjects });
        setTimeout(() => {
          if (scrollToCompetence) {
            console.log(
              "Déclenchement du scroll vers l'élément:",
              `competence-${competence.title.toLowerCase()}`,
            );
            this.scrollService.scrollToElement(
              `competence-${competence.title.toLowerCase()}`,
              100,
            );
            setTimeout(() => {
              console.log('Mise en évidence de la compétence après 1 seconde');
              this.zone.run(() => {
                this._selectedCompetence$.next({
                  competence,
                  highlightProjects: false,
                });
              });
            }, 1000);
          } else {
            console.log(
              'Mise à jour immédiate de la compétence (même compétence, sans scroll).',
            );
            this.zone.run(() =>
              this._selectedCompetence$.next({ competence, highlightProjects }),
            );
          }
        }, 50);
      } else {
        // Cas normal : réinitialisation puis mise à jour
        console.log(
          'Nouvelle compétence sélectionnée. Réinitialisation de la sélection.',
        );
        this._selectedCompetence$.next({ competence: null, highlightProjects });
        if (scrollToCompetence) {
          console.log(
            "Déclenchement du scroll vers l'élément:",
            `competence-${competence.title.toLowerCase()}`,
          );
          this.scrollService.scrollToElement(
            `competence-${competence.title.toLowerCase()}`,
            100,
          );
          setTimeout(() => {
            console.log(
              'Mise en évidence de la nouvelle compétence après 1 seconde.',
            );
            this.zone.run(() =>
              this._selectedCompetence$.next({ competence, highlightProjects }),
            );
          }, 1000);
        } else {
          setTimeout(() => {
            console.log(
              'Mise en évidence de la compétence sans scroll (après délai de 50ms).',
            );
            this.zone.run(() =>
              this._selectedCompetence$.next({ competence, highlightProjects }),
            );
            setTimeout(() => {
              console.log(
                'Déclenchement du scroll vers le premier projet correspondant après 150ms.',
              );
              this.scrollService.scrollToFirstMatchingProject(competence.title);
            }, 150);
          }, 50);
        }
      }
    }
  }
}
