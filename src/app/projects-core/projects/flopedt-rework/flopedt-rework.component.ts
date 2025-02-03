import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-flopedt-rework',
  templateUrl: './flopedt-rework.component.html',
  styleUrl: './flopedt-rework.component.scss',
  standalone: false,
})
export class FlopedtReworkComponent implements Project {
  id = 'flopedt-rework';
  name = 'Flopedt rework arborescence';
  description = "Refonte de l'arborecense du repository de Flopedt";
  type = ProjectType.PERSO;
  keywords = [
    'Django',
    'FLOP',
    'Calendar',
    'Python',
    'Web',
    'Application',
    'Pannification',
  ];
}
