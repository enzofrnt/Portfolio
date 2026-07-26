import { Component, Input, OnChanges } from '@angular/core';
import { Project } from '../../project.model';

const DEFAULT_LOGO = '/assets/images/default.webp';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: false,
})
export class ProjectCardComponent implements OnChanges {
  @Input() project!: Project;

  logoSrc = DEFAULT_LOGO;

  ngOnChanges(): void {
    this.logoSrc =
      this.project.hasLogo === false
        ? DEFAULT_LOGO
        : `/assets/images/${this.project.id}.webp`;
  }

  /** Filet de sécurité si un logo déclaré est absent des assets. */
  onLogoError(): void {
    this.logoSrc = DEFAULT_LOGO;
  }
}
