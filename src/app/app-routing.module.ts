import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competence/competence.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Portfolio Enzo Fournet - Développeur Full Stack',
      description:
        "Portfolio d'Enzo Fournet, développeur Full Stack passionné par les nouvelles technologies. Étudiant en BUT Informatique en alternance.",
      keywords:
        'Accueil, Portfolio, Full Stack, Enzo, Fournet, Enzo Fournet, Alternance, Développement, IA, RAG, Jeux',
    },
  },
  {
    path: 'cv',
    component: CvComponent,
    data: {
      title: 'Portfolio - CV',
      description: 'CV de Enzo Fournet',
      keywords: 'CV, Enzo Fournet, Alternance, Développement',
    },
  },
  {
    path: 'competences',
    component: CompetencesComponent,
    data: {
      title: 'Portfolio - Competences',
      description: 'Compétences du BUT informatique',
      keywords: 'Compétences, BUT informatique',
    },
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects-core/projects-core.module').then(
        (m) => m.ProjectsCoreModule,
      ),
    data: {
      title: 'Portfolio - Projets',
      description: 'Projets réalisés par Enzo Fournet',
      keywords:
        'Projets, Enzo Fournet, Alternance, Développement, IUT, Perso, IA, RAG, Jeux',
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const allRoutes = routes;
