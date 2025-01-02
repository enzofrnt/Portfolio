import { Injectable } from '@angular/core';
import { WaitForDbComponent } from './projects/wait-for-db/wait-for-db.component';
import { Project, ProjectType } from './project.model';
import { RoomOcupComponent } from './projects/room-ocup/room-ocup.component';
import { MemoryComponent } from './projects/memory/memory.component';
import { FlopedtReworkComponent } from './projects/flopedt-rework/flopedt-rework.component';
import { DjangoSseComponent } from './projects/django-sse/django-sse.component';
import { DjangoHybridrouterComponent } from './projects/django-hybridrouter/django-hybridrouter.component';
import { BeamMPMacosComponent } from './projects/beammp-macos/beammp-macos.component';
import { BankManageComponent } from './projects/bank-manage/bank-manage.component';
import { AutoQcmComponent } from './projects/auto-qcm/auto-qcm.component';
import { DjangoRagComponent } from './projects/django-rag/django-rag.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectCoreService {
  static projectComponents = [
    WaitForDbComponent,
    RoomOcupComponent,
    MemoryComponent,
    FlopedtReworkComponent,
    DjangoSseComponent,
    DjangoHybridrouterComponent,
    BeamMPMacosComponent,
    BankManageComponent,
    AutoQcmComponent,
    DjangoRagComponent,
  ];

  private cachedProjects: Project[] | null = null;

  getProjects(): Project[] {
    if (this.cachedProjects) {
      return this.cachedProjects;
    }

    this.cachedProjects = ProjectCoreService.projectComponents.map(
      (Component) => new Component() as Project,
    );

    return this.cachedProjects;
  }

  getProjectsByType(): Record<ProjectType, Project[]> {
    const projects = this.getProjects();
    return {
      [ProjectType.IUT]: projects.filter((p) => p.type === ProjectType.IUT),
      [ProjectType.PERSO]: projects.filter((p) => p.type === ProjectType.PERSO),
    };
  }
}
