import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-wait-for-db',
  templateUrl: './wait-for-db.component.html',
  styleUrl: './wait-for-db.component.scss',
  standalone: false,
})
export class WaitForDbComponent implements Project {
  id = 'wait-for-db';
  name = 'Django WaitForDB';
  description =
    'Un projet de gestion des connexions pour vérifier la disponibilité des bases de données';
  type = ProjectType.PERSO;
  link = 'https://github.com/enzofrnt/django_wait_for_db';
}
