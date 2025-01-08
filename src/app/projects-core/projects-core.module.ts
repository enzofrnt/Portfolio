import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-core-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';
import { ProjectWrapperComponent } from './project-wrapper/project-wrapper.component';
import { CompetencesModule } from '../competences/competences.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

@NgModule({
  declarations: [
    ProjectWrapperComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, CompetencesModule],
  exports: [ProjectWrapperComponent, ProjectsListComponent],
})
export class ProjectsCoreModule {}
