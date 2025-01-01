import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoQcmComponent } from './auto-qcm/auto-qcm.component';
import { BankManageComponent } from './bank-manage/bank-manage.component';
import { BeamMPMacosComponent } from './beammp-macos/beammp-macos.component';
import { DjangoHybridrouterComponent } from './django-hybridrouter/django-hybridrouter.component';
import { DjangoRagComponent } from './django-rag/django-rag.component';
import { DjangoSseComponent } from './django-sse/django-sse.component';
import { FlopedtReworkComponent } from './flopedt-rework/flopedt-rework.component';
import { MemoryComponent } from './memory/memory.component';
import { RoomOcupComponent } from './room-ocup/room-ocup.component';
import { WaitForDbComponent } from './wait-for-db/wait-for-db.component';
import { ProjectsCoreModule } from '../projects-core.module';
import { Highlight, provideHighlightOptions } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    WaitForDbComponent,
    AutoQcmComponent,
    RoomOcupComponent,
    MemoryComponent,
    BankManageComponent,
    BeamMPMacosComponent,
    DjangoSseComponent,
    DjangoHybridrouterComponent,
    FlopedtReworkComponent,
    DjangoRagComponent,
  ],
  imports: [CommonModule, ProjectsCoreModule, Highlight],
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
  ],
})
export class ProjectsModule {}
