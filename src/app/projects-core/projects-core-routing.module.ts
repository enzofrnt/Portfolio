import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectCoreService } from './project-core.service';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  ...ProjectCoreService.projectComponents.map((component) => ({
    path: new component().id,
    component: component,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
