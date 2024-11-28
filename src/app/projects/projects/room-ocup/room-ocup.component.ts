import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-room-ocup',
  templateUrl: './room-ocup.component.html',
  styleUrl: './room-ocup.component.scss',
})
export class RoomOcupComponent implements Project {
  id = 'room-ocup';
  name = 'Occupation-salles';
  description =
    "Application web de prévision d'occupation des salles de l'IUT de Blagnac.";
  type = ProjectType.IUT;
}
