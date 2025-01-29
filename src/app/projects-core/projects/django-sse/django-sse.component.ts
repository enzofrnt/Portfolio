import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-django-sse',
  templateUrl: './django-sse.component.html',
  styleUrl: './django-sse.component.scss',
  standalone: false,
})
export class DjangoSseComponent implements Project {
  id = 'django-sse';
  name = 'Django Eventstream (SSE)';
  description = 'Ajout du support multiprocessus au module Django Eventstream';
  type = ProjectType.PERSO;
  link = 'https://github.com/fanout/django-eventstream/pull/152';
}
