import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-core-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';
import { ProjectWrapperComponent } from './project-wrapper/project-wrapper.component';

@NgModule({
  declarations: [
    ProjectWrapperComponent,
    ProjectsListComponent,
    ProjectCardComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [ProjectWrapperComponent],
})
export class ProjectsCoreModule {}
