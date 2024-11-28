import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-auto-qcm',
  templateUrl: './auto-qcm.component.html',
  styleUrl: './auto-qcm.component.scss',
})
export class AutoQcmComponent implements Project {
  id = 'auto-qcm';
  name = 'Auto QCM';
  description = 'Application de QCM automatique.';
  type = ProjectType.IUT;
}
