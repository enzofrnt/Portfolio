import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompetencesModule } from '../competences/competences.module';
import { ProjectWrapperComponent } from './project-wrapper/project-wrapper.component';
import { ProjectsRoutingModule } from './projects-core-routing.module';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

@NgModule({
  declarations: [
    ProjectWrapperComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CompetencesModule,
    NgOptimizedImage,
  ],
  exports: [ProjectWrapperComponent, ProjectsListComponent],
})
export class ProjectsCoreModule {}
