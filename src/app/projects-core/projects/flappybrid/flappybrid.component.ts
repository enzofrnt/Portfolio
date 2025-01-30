import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Project, ProjectType } from '../../project.model';
import { CompetencesComponent } from '../../../competences/competence/competence.component';

interface UnityInstance {
  Quit: () => void;
}

@Component({
  selector: 'app-flappybrid',
  templateUrl: './flappybrid.component.html',
  styleUrls: ['./flappybrid.component.scss'],
  standalone: false,
})
export class FlappybridComponent implements AfterViewInit, OnDestroy, Project {
  competences = [CompetencesComponent.competenceRealiser];
  id = 'flappybrid';
  name = 'Flappybrid - Unity';
  description = 'Jeu de flappy bird en Unity';
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/FlappyBird';

  /**
   * Référence à l'élément div #webglContainer dans le template
   * qui contient le canvas Unity.
   */
  @ViewChild('webglContainer') webglContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('fullscreenOverlay')
  fullscreenOverlay!: ElementRef<HTMLDivElement>;
  @ViewChild('fullscreenContainer')
  fullscreenContainer!: ElementRef<HTMLDivElement>;

  private unityInstance: UnityInstance | null = null;
  /** Listener pour la fonction de redimensionnement (on le stocke pour pouvoir le retirer en OnDestroy). */
  private resizeListener = () => this.enforceAspectRatio();

  constructor() {
    // Écouter la touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.exitFullscreen();
      }
    });
  }

  ngAfterViewInit(): void {
    // --------------------------
    // 1. Paramètres du Build Unity (à adapter)
    // --------------------------
    const buildUrl = 'assets/game/Build';
    const config = {
      dataUrl: buildUrl + '/test-web.data',
      frameworkUrl: buildUrl + '/test-web.framework.js',
      codeUrl: buildUrl + '/test-web.wasm',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'DefaultCompany',
      productName: 'My project (3)',
      productVersion: '0.1.0',
      // On peut mettre "devicePixelRatio: 0" pour déléguer l'échelle à la CSS/JS.
      devicePixelRatio: 0,
    };

    // --------------------------
    // 2. Sélection des éléments DOM
    // --------------------------
    const container = this.webglContainer.nativeElement; // <div id="unity-container">
    const canvas = container.querySelector(
      '#unity-canvas',
    ) as HTMLCanvasElement;
    const loadingBar = container.querySelector(
      '#unity-loading-bar',
    ) as HTMLElement;
    const progressBarFull = container.querySelector(
      '#unity-progress-bar-full',
    ) as HTMLElement;

    // --------------------------
    // 3. (Optionnel) Gérer les mobiles
    // --------------------------
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content =
        'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);

      container.className = 'unity-mobile';
      canvas.className = 'unity-mobile';
    }

    // Montre la barre de chargement
    loadingBar.style.display = 'block';

    // --------------------------
    // 4. Charger le script Unity
    // --------------------------
    const script = document.createElement('script');
    script.async = false;
    script.type = 'text/javascript';
    script.src = `${buildUrl}/test-web.loader.js`;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress: number) => {
        progressBarFull.style.width = 100 * progress + '%';
      })
        .then((unityInstance: UnityInstance) => {
          this.unityInstance = unityInstance;
          loadingBar.style.display = 'none';

          // --------------------------
          // 5. Appliquer le ratio 9:16
          // --------------------------
          this.enforceAspectRatio();
          // Écouter le resize sur la fenêtre pour réajuster
          window.addEventListener('resize', this.resizeListener);
        })
        .catch((message: string) => {
          alert(message);
        });
    };
    container.appendChild(script);
  }

  /**
   * Nettoyage lorsqu'on détruit le composant.
   */
  ngOnDestroy(): void {
    // Retire l'écouteur d'événements pour éviter les fuites
    window.removeEventListener('resize', this.resizeListener);

    // Optionnel : détruire l'instance Unity si nécessaire
    if (this.unityInstance && this.unityInstance.Quit) {
      this.unityInstance.Quit();
    }
  }

  /**
   * Force un ratio 9:16 dans les limites du conteneur parent (le <div> #webglContainer).
   * Le canvas ne dépasse pas la taille disponible.
   */
  private enforceAspectRatio(): void {
    const aspectRatio = 9 / 16;
    const isFullscreen =
      this.fullscreenOverlay.nativeElement.classList.contains('active');
    const container = isFullscreen
      ? this.fullscreenContainer.nativeElement
      : this.webglContainer.nativeElement;
    const canvas = container.querySelector(
      '#unity-canvas',
    ) as HTMLCanvasElement;
    if (!canvas) return;

    if (isFullscreen) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const windowRatio = windowWidth / windowHeight;

      if (windowRatio > aspectRatio) {
        // Écran plus large que le ratio
        const height = windowHeight;
        const width = height * aspectRatio;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        // canvas.style.marginLeft = `${(windowWidth - width) / 2}px`;
        canvas.style.marginTop = '0';

        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
      } else {
        // Écran plus haut que le ratio
        const width = windowWidth;
        const height = width / aspectRatio;

        canvas.style.width = '100vw';
        canvas.style.height = `${height}px`;
        canvas.style.marginLeft = '0';
        // canvas.style.marginTop = `${(windowHeight - height) / 2}px`;

        container.style.width = '100vw';
        container.style.height = `${height}px`;
      }
    } else {
      // Mode normal, on garde le code existant
      const wrapper = container.parentElement;
      if (!wrapper) return;

      const maxWidth = wrapper.clientWidth - 64;
      const maxHeight = window.innerHeight * 0.7;

      let width, height;
      if (maxWidth / maxHeight > aspectRatio) {
        height = maxHeight;
        width = height * aspectRatio;
      } else {
        width = maxWidth;
        height = width / aspectRatio;
      }

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.marginLeft = '0';
      canvas.style.marginTop = '0';

      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
    }
  }

  enterFullscreen(): void {
    const overlay = this.fullscreenOverlay.nativeElement;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Copier le canvas dans le conteneur fullscreen
    const originalCanvas =
      this.webglContainer.nativeElement.querySelector('#unity-canvas');
    const fullscreenContainer = this.fullscreenContainer.nativeElement;

    if (originalCanvas) {
      // Au lieu de chercher un canvas existant, on déplace simplement le canvas original
      fullscreenContainer.appendChild(originalCanvas);
    }

    // Réajuster le ratio
    setTimeout(() => this.enforceAspectRatio(), 100);
  }

  exitFullscreen(): void {
    const overlay = this.fullscreenOverlay.nativeElement;
    if (!overlay.classList.contains('active')) return;

    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Remettre le canvas dans son conteneur original
    const canvas =
      this.fullscreenContainer.nativeElement.querySelector('#unity-canvas');
    const originalContainer = this.webglContainer.nativeElement;

    if (canvas && originalContainer) {
      originalContainer.appendChild(canvas);
    }

    // Réajuster le ratio
    setTimeout(() => this.enforceAspectRatio(), 100);
  }
}
