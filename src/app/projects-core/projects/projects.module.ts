import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeBlockComponent } from '../../utils/code-block/code-block.component';
import { ProjectsCoreModule } from '../projects-core.module';
import { AutoQcmComponent } from './auto-qcm/auto-qcm.component';
import { BankManageComponent } from './bank-manage/bank-manage.component';
import { BeamMPMacosComponent } from './beammp-macos/beammp-macos.component';
import { DjangoHybridrouterComponent } from './django-hybridrouter/django-hybridrouter.component';
import { DjangoRagComponent } from './django-rag/django-rag.component';
import { DjangoSseComponent } from './django-sse/django-sse.component';
import { FlappybridComponent } from './flappybrid/flappybrid.component';
import { FlopedtReworkComponent } from './flopedt-rework/flopedt-rework.component';
import { MemoryComponent } from './memory/memory.component';
import { RoomOcupComponent } from './room-ocup/room-ocup.component';
import { WaitForDbComponent } from './wait-for-db/wait-for-db.component';
import { OptiAlgoComponent } from './opti-algo/opti-algo.component';

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
    FlappybridComponent,
    OptiAlgoComponent,
  ],
  imports: [CommonModule, ProjectsCoreModule, CodeBlockComponent],
  providers: [],
})
export class ProjectsModule {}
