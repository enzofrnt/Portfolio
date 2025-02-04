import { Component } from '@angular/core';
import { CompetencesComponent } from '../../../competences/competence/competence.component';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-rag-report',
  standalone: false,

  templateUrl: './rag-report.component.html',
  styleUrl: './rag-report.component.scss',
})
export class RagReportComponent implements Project {
  id = 'rag-report';
  name = 'Mémoire RAG';
  description =
    "Mémoire sur l'implémentation d'un système RAG pour l'analyse de rapports";
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/Memoire-RAG';
  competences = [
    CompetencesComponent.competenceOptimiser,
    CompetencesComponent.competenceRealiser,
  ];
  keywords = [
    'RAG',
    'NLP',
    'Python',
    'PGVector',
    'LLM',
    'Mémoire',
    'Recherche',
  ];
}
