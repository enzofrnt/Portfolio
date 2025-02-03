import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-django-hybridrouter',
  templateUrl: './django-hybridrouter.component.html',
  styleUrl: './django-hybridrouter.component.scss',
  standalone: false,
})
export class DjangoHybridrouterComponent implements Project {
  id = 'django-hybridrouter';
  name = 'Django REST framework HybridRouter';
  description =
    'Un exemple de configuration de Django pour une application Angular';
  type = ProjectType.PERSO;
  link = 'https://github.com/enzofrnt/djangorestframework-hybridrouter';
  keywords = [
    'Django',
    'REST',
    'framework',
    'HybridRouter',
    'View',
    'APIView',
    'ViewSet',
    'Django REST framework',
    'Python',
  ];
}
