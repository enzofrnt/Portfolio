import { Component, Input } from '@angular/core';
import { Competence } from '../competence.model';
import { CompetencesComponent } from '../competence/competence.component';
import { CompetencesService } from '../../services/competence.service';

@Component({
  selector: 'app-competence-label',
  standalone: false,

  templateUrl: './competence-label.component.html',
  styleUrl: './competence-label.component.scss',
})
export class CompetenceLabelComponent {
  @Input() competence: Competence = CompetencesComponent.competenceRealiser;

  constructor(private competencesService: CompetencesService) {}

  onLabelClick() {
    console.log('onLabelClick');
    console.log(this.competence);
    this.competencesService.setSelectedCompetence(this.competence, true);
  }

  getTextColor(): string {
    const hex = this.competence.color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  }
}
