import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-flowrank',
  templateUrl: './flowrank.component.html',
  styleUrl: './flowrank.component.scss',
  standalone: false,
})
export class FlowrankComponent implements Project {
  id = 'flowrank';
  name = 'FlowRank';
  description =
    'Application web de tri et de classification automatique de mails par IA';
  type = ProjectType.CNAM;
  link = 'https://github.com/FlowRank/FlowRank';
  hasLogo = false;
  keywords = [
    'FastAPI',
    'Python',
    'React',
    'TypeScript',
    'Tailwind',
    'PostgreSQL',
    'IA',
    'Transformers',
    'Gmail API',
    'Docker',
  ];
}
