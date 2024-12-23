import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { WaitForDbComponent } from './projects/wait-for-db/wait-for-db.component';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';
import { AutoQcmComponent } from './projects/auto-qcm/auto-qcm.component';
import { RoomOcupComponent } from './projects/room-ocup/room-ocup.component';
import { MemoryComponent } from './projects/memory/memory.component';
import { BankManageComponent } from './projects/bank-manage/bank-manage.component';
import { BeamMPMacosComponent } from './projects/beammp-macos/beammp-macos.component';
import { DjangoSseComponent } from './projects/django-sse/django-sse.component';
import { DjangoHybridrouterComponent } from './projects/django-hybridrouter/django-hybridrouter.component';
import { FlopedtReworkComponent } from './projects/flopedt-rework/flopedt-rework.component';
import { DjangoRagComponent } from './projects/django-rag/django-rag.component';
import { ProjectWrapperComponent } from './project-wrapper/project-wrapper.component';

@NgModule({
  declarations: [
    WaitForDbComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    AutoQcmComponent,
    RoomOcupComponent,
    MemoryComponent,
    BankManageComponent,
    BeamMPMacosComponent,
    DjangoSseComponent,
    DjangoHybridrouterComponent,
    FlopedtReworkComponent,
    DjangoRagComponent,
    ProjectWrapperComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
