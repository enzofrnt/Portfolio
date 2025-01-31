import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private isScrolling = false;
  private scrollTimeout: any;

  scrollToElement(elementId: string, offset = 100): void {
    if (this.isScrolling) {
      clearTimeout(this.scrollTimeout);
    }

    this.isScrolling = true;
    const element = document.getElementById(elementId);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 1000); // Attendre la fin de l'animation de scroll
  }

  scrollToFirstMatchingProject(competence: string): void {
    if (this.isScrolling) {
      clearTimeout(this.scrollTimeout);
    }

    this.isScrolling = true;
    const projectCards = document.querySelectorAll('.project-card.selected');
    if (projectCards.length > 0) {
      const firstProject = projectCards[0];
      const y =
        firstProject.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  isCurrentlyScrolling(): boolean {
    return this.isScrolling;
  }
}
