import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { WaitForDbComponent } from './wait-for-db/wait-for-db.component';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Liste des composants de projet à charger dynamiquement
  private projectComponents = [
    WaitForDbComponent,
    // Ajoute ici d'autres composants
  ];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  getProjects(): Project[] {
    return this.projectComponents.map((component) => {
      // Utilise le ComponentFactoryResolver pour créer une instance du composant
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = componentFactory.create(this.injector);
      const instance = componentRef.instance;

      // Extrait les propriétés nécessaires
      const project: Project = {
        id: instance.id,
        name: instance.name,
        description: instance.description,
        path: instance.path,
        type: instance.type,
      };

      // Détruit le composant pour éviter les fuites de mémoire
      componentRef.destroy();

      return project;
    });
  }
}
