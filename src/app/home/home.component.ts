import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompetencesComponent } from '../competences/competence/competence.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements OnInit {
  protected readonly CompetencesComponent = CompetencesComponent;

  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    // Définir le titre de la page
    this.title.setTitle('Portfolio Enzo Fournet - Développeur Full Stack');

    // Ajouter les meta tags
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Portfolio d'Enzo Fournet, développeur Full Stack passionné par le développement web et les nouvelles technologies. Étudiant en BUT Informatique en alternance.",
      },
      {
        name: 'keywords',
        content:
          'Enzo Fournet, développeur, full stack, angular, spring boot, portfolio, web, développement, étudiant, BUT Informatique, alternance; IA, RAG',
      },
      { name: 'author', content: 'Enzo Fournet' },
      {
        property: 'og:title',
        content: 'Portfolio Enzo Fournet - Développeur Full Stack',
      },
      {
        property: 'og:description',
        content:
          "Portfolio d'Enzo Fournet, développeur Full Stack passionné par le développement web et les nouvelles technologies.",
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://enzo-frnt.fr' },
      {
        property: 'og:image',
        content: 'https://enzo-frnt.fr/favicon.ico',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Portfolio Enzo Fournet - Développeur Full Stack',
      },
      {
        name: 'twitter:description',
        content:
          "Portfolio d'Enzo Fournet, développeur Full Stack passionné par le développement web et les nouvelles technologies.",
      },
      {
        name: 'twitter:image',
        content: 'https://enzo-frnt.fr/favicon.ico',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
