import { Component } from '@angular/core';
import { CompetencesComponent } from '../../../competences/competence/competence.component';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-room-ocup',
  templateUrl: './room-ocup.component.html',
  styleUrl: './room-ocup.component.scss',
  standalone: false,
})
export class RoomOcupComponent implements Project {
  id = 'room-ocup';
  name = 'Occupation-salles';
  description =
    "Application web de prévision d'occupation des salles de l'IUT de Blagnac";
  type = ProjectType.IUT;
  link =
    'https://github.com/Tructruc/SAE-ALT-S3-Dev-23-24-Occupation-salles-3A-Groupe-2';
  competences = [
    CompetencesComponent.competenceAdministrer,
    CompetencesComponent.competenceRealiser,
    CompetencesComponent.competenceGerer,
    CompetencesComponent.competenceConduire,
    CompetencesComponent.competenceCollaborer,
  ];
  keywords = [
    'IoT',
    'Capteurs',
    'VueJS',
    'Django',
    'Docker',
    'TimescaleDB',
    'IUT',
    'Blagnac',
  ];
}
