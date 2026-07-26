import {
  AfterViewInit,
  Component,
  ElementRef,
  isDevMode,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/** Largeur CSS de la page A4 du CV (voir external/react-cv). */
const CV_PAGE_WIDTH = 794;

/** Serveur de dev Vite du CV (lancé par `pnpm start`, voir dev:cv). */
const CV_DEV_SERVER_URL = 'http://localhost:5173/';

/** CV buildé, copié dans les assets au build (voir angular.json). */
const CV_BUILD_URL = 'assets/cv/index.html';

@Component({
  selector: 'app-cv',
  standalone: false,

  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cvWrapper') cvWrapper?: ElementRef<HTMLElement>;

  /** En dev, le CV vient du serveur Vite (HMR) ; en prod, du build. */
  readonly cvSrc: SafeResourceUrl;

  scale = 1;
  private resizeObserver?: ResizeObserver;

  constructor(sanitizer: DomSanitizer) {
    this.cvSrc = sanitizer.bypassSecurityTrustResourceUrl(
      isDevMode() ? CV_DEV_SERVER_URL : CV_BUILD_URL,
    );
  }

  ngAfterViewInit(): void {
    const wrapper = this.cvWrapper?.nativeElement;
    if (!wrapper || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(([entry]) => {
      this.scale = entry.contentRect.width / CV_PAGE_WIDTH;
    });
    this.resizeObserver.observe(wrapper);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
