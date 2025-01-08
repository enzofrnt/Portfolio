import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCoreService } from './project-core.service';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
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
