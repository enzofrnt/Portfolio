import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competence/competence.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
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
