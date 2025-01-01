import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
    selector: 'app-auto-qcm',
    templateUrl: './auto-qcm.component.html',
    styleUrl: './auto-qcm.component.scss',
    standalone: false
})
export class AutoQcmComponent implements Project {
  id = 'auto-qcm';
  name = 'Auto QCM';
  description = "Application de QCM automatique pour l'IUT de blagnac";
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/AUTO-QCM';
}
