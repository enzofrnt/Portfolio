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
}
