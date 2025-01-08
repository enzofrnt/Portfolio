import { Component } from '@angular/core';
import { Competence } from '../competence';
@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss'],
  standalone: false,
})
export class CompetencesComponent {
  static competenceRealiser: Competence = {
    color: '#dc3545',
    title: 'Réaliser',
    niveaux: [
      {
        titre: 'Niveau 1',
        description: 'Développer des applications informatiques simples',
      },
      {
        titre: 'Niveau 2',
        description:
          'Partir des exigences et aller jusqu’à une application complète',
      },
      {
        titre: 'Niveau 3',
        description:
          'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)',
      },
    ],
  };

  static competenceOptimiser: Competence = {
    color: '#fd7e14',
    title: 'Optimiser',
    niveaux: [
      {
        titre: 'Niveau 1',
        description: 'Appréhender et construire des algorithmes',
      },
      {
        titre: 'Niveau 2',
        description:
          'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
      },
    ],
  };

  static competenceAdministrer: Competence = {
    color: '#ffc107',
    title: 'Administrer',
    niveaux: [
      {
        titre: 'Niveau 1',
        description: 'Installer et configurer un poste de travail',
      },
      {
        titre: 'Niveau 2',
        description: 'Déployer des services dans une architecture réseau',
      },
      {
        titre: 'Niveau 3',
        description:
          'Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles',
      },
    ],
  };

  static competenceGerer: Competence = {
    color: '#28a745',
    title: 'Gérer',
    niveaux: [
      {
        titre: 'Niveau 1',
        description:
          'Concevoir et mettre en place une base de données à partir d’un cahier des charges client',
      },
      {
        titre: 'Niveau 2',
        description:
          'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
      },
    ],
  };

  static competenceConduire: Competence = {
    color: '#007bff',
    title: 'Conduire',
    niveaux: [
      {
        titre: 'Niveau 1',
        description:
          'Identifier les besoins métiers des clients et des utilisateurs',
      },
      {
        titre: 'Niveau 2',
        description:
          'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
      },
    ],
  };

  static competenceCollaborer: Competence = {
    color: '#343a40',
    title: 'Collaborer',
    niveaux: [
      {
        titre: 'Niveau 1',
        description: 'Identifier ses aptitudes pour travailler dans une équipe',
      },
      {
        titre: 'Niveau 2',
        description:
          'Situer son rôle et ses missions au sein d’une équipe informatique',
      },
      { titre: 'Niveau 3', description: 'Manager une équipe informatique' },
    ],
  };

  // competences = [
  //   {
  //     title: 'Réaliser',
  //     color: '#dc3545', // Rouge Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description: 'Développer des applications informatiques simples',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description:
  //           'Partir des exigences et aller jusqu’à une application complète',
  //       },
  //       {
  //         titre: 'Niveau 3',
  //         description:
  //           'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Optimiser',
  //     color: '#fd7e14', // Orange Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description: 'Appréhender et construire des algorithmes',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description:
  //           'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Administrer',
  //     color: '#ffc107', // Jaune Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description: 'Installer et configurer un poste de travail',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description: 'Déployer des services dans une architecture réseau',
  //       },
  //       {
  //         titre: 'Niveau 3',
  //         description:
  //           'Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Gérer',
  //     color: '#28a745', // Vert Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description:
  //           'Concevoir et mettre en place une base de données à partir d’un cahier des charges client',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description:
  //           'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Conduire',
  //     color: '#007bff', // Bleu Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description:
  //           'Identifier les besoins métiers des clients et des utilisateurs',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description:
  //           'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Collaborer',
  //     color: '#343a40', // Noir Bootstrap
  //     niveaux: [
  //       {
  //         titre: 'Niveau 1',
  //         description:
  //           'Identifier ses aptitudes pour travailler dans une équipe',
  //       },
  //       {
  //         titre: 'Niveau 2',
  //         description:
  //           'Situer son rôle et ses missions au sein d’une équipe informatique',
  //       },
  //       { titre: 'Niveau 3', description: 'Manager une équipe informatique' },
  //     ],
  //   },
  // ];

  competences = [
    CompetencesComponent.competenceRealiser,
    CompetencesComponent.competenceOptimiser,
    CompetencesComponent.competenceAdministrer,
    CompetencesComponent.competenceGerer,
    CompetencesComponent.competenceConduire,
    CompetencesComponent.competenceCollaborer,
  ];

  hoveredIndex: number | null = null;

  onMouseOver(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}
