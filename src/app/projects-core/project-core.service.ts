import { Injectable } from '@angular/core';
import { Project, ProjectType } from './project.model';
import { AutoQcmComponent } from './projects/auto-qcm/auto-qcm.component';
import { BankManageComponent } from './projects/bank-manage/bank-manage.component';
import { BeamMPMacosComponent } from './projects/beammp-macos/beammp-macos.component';
import { DjangoHybridrouterComponent } from './projects/django-hybridrouter/django-hybridrouter.component';
import { DjangoRagComponent } from './projects/django-rag/django-rag.component';
import { DjangoSseComponent } from './projects/django-sse/django-sse.component';
import { FlappybridComponent } from './projects/flappybrid/flappybrid.component';
import { FlopedtReworkComponent } from './projects/flopedt-rework/flopedt-rework.component';
import { MemoryComponent } from './projects/memory/memory.component';
import { RoomOcupComponent } from './projects/room-ocup/room-ocup.component';
import { WaitForDbComponent } from './projects/wait-for-db/wait-for-db.component';

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
    FlappybridComponent,
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
