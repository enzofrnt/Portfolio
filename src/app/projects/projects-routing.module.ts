import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitForDbComponent } from './wait-for-db/wait-for-db.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'wait-for-db', component: WaitForDbComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
