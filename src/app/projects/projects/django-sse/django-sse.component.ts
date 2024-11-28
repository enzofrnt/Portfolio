import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-django-sse',
  templateUrl: './django-sse.component.html',
  styleUrl: './django-sse.component.scss',
})
export class DjangoSseComponent implements Project {
  id = 'django-sse';
  name = 'Django Eventstream (SSE)';
  description = 'Un exemple de Server-Sent Events avec Django.';
  type = ProjectType.PERSO;
}
