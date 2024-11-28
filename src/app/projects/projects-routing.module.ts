import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list/projects-list.component';
import { ProjectService } from './project.service';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  ...ProjectService.projectComponents.map((component) => ({
    path: new component().id,
    component: component,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
