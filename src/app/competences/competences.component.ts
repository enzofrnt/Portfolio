import { Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent {
  competences = [
    {
      title: 'Réaliser',
      color: '#dc3545', // Rouge Bootstrap
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
    },
    {
      title: 'Optimiser',
      color: '#fd7e14', // Orange Bootstrap
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
    },
    {
      title: 'Administrer',
      color: '#ffc107', // Jaune Bootstrap
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
    },
    {
      title: 'Gérer',
      color: '#28a745', // Vert Bootstrap
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
    },
    {
      title: 'Conduire',
      color: '#007bff', // Bleu Bootstrap
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
    },
    {
      title: 'Collaborer',
      color: '#343a40', // Noir Bootstrap
      niveaux: [
        {
          titre: 'Niveau 1',
          description:
            'Identifier ses aptitudes pour travailler dans une équipe',
        },
        {
          titre: 'Niveau 2',
          description:
            'Situer son rôle et ses missions au sein d’une équipe informatique',
        },
        { titre: 'Niveau 3', description: 'Manager une équipe informatique' },
      ],
    },
  ];
}
