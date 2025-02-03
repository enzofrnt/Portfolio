import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToElement(elementId: string, offset = 100): void {
    const element = document.getElementById(elementId);
    if (element) {
      const targetY =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

  scrollToFirstMatchingProject(competence: string): void {
    const projectCards = document.querySelectorAll('.project-card.selected');
    if (projectCards.length > 0) {
      const firstProject = projectCards[0] as HTMLElement;
      const targetY =
        firstProject.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }
}
