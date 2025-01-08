import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './competences/competence/competence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects-core/projects-core.module').then(
        (m) => m.ProjectsCoreModule,
      ),
  },
  { path: 'home', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
