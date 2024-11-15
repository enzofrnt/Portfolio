import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { WaitForDbComponent } from './wait-for-db/wait-for-db.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [WaitForDbComponent, ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
