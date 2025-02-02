import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompetenceLabelComponent } from './competence-label/competence-label.component';
import { CompetencesComponent } from './competence/competence.component';

@NgModule({
  declarations: [CompetenceLabelComponent, CompetencesComponent],
  imports: [CommonModule],
  exports: [CompetenceLabelComponent, CompetencesComponent],
})
export class CompetencesModule {}
