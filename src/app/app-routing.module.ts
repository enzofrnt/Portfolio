import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './competences/competence/competence.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects-core/projects-core.module').then(
        (m) => m.ProjectsCoreModule,
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
