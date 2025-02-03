import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-django-rag',
  templateUrl: './django-rag.component.html',
  styleUrl: './django-rag.component.scss',
  standalone: false,
})
export class DjangoRagComponent implements Project {
  id = 'django-rag';
  name = 'Django RAG Ollama';
  description =
    "Django RAG Ollama est un project d'application web de IA RAG avec Django";
  type = ProjectType.PERSO;
  link = 'https://github.com/enzofrnt/Django-ollama-RAG';
  keywords = [
    'Django',
    'RAG',
    'Ollama',
    'Python',
    'AI',
    'Web',
    'Application',
    'Retrival Augmented Generation',
  ];
}
