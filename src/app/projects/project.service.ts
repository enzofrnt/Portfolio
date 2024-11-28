import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { WaitForDbComponent } from './projects/wait-for-db/wait-for-db.component';
import { Project, ProjectType } from './project.model';
import { RoomOcupComponent } from './projects/room-ocup/room-ocup.component';
import { MemoryComponent } from './projects/memory/memory.component';
import { FlopedtReworkComponent } from './projects/flopedt-rework/flopedt-rework.component';
import { DjangoSseComponent } from './projects/django-sse/django-sse.component';
import { DjangoHybridrouterComponent } from './projects/django-hybridrouter/django-hybridrouter.component';
import { BeampMacosComponent } from './projects/beamp-macos/beamp-macos.component';
import { BankManageComponent } from './projects/bank-manage/bank-manage.component';
import { AutoQcmComponent } from './projects/auto-qcm/auto-qcm.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  static projectComponents = [
    WaitForDbComponent,
    RoomOcupComponent,
    MemoryComponent,
    FlopedtReworkComponent,
    DjangoSseComponent,
    DjangoHybridrouterComponent,
    BeampMacosComponent,
    BankManageComponent,
    AutoQcmComponent,
  ];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {}

  getProjects(): Project[] {
    return ProjectService.projectComponents.map((component) => {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = componentFactory.create(this.injector);
      const instance = componentRef.instance;

      const project: Project = {
        id: instance.id,
        name: instance.name,
        description: instance.description,
        type: instance.type,
      };

      componentRef.destroy();
      return project;
    });
  }

  getProjectsByType(): { [key in ProjectType]: Project[] } {
    const projects = this.getProjects();
    return {
      [ProjectType.IUT]: projects.filter(
        (project) => project.type === ProjectType.IUT,
      ),
      [ProjectType.PERSO]: projects.filter(
        (project) => project.type === ProjectType.PERSO,
      ),
    };
  }
}
