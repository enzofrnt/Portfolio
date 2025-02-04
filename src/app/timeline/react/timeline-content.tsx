import React from 'react';

export const timelineData = [
  {
    title: '2021-2022',
    content: (
      <div className="space-y-6">
        <div className="bg-body rounded-2xl p-6 shadow-md">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            BAC STI2D
          </h2>
          <h3 className="mb-2 text-xl text-muted md:text-2xl">
            Lycée Charles de Gaulle - Muret (31)
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-success inline-flex items-center text-lg font-semibold">
                <i className="bi bi-award me-2"></i>
                Mention Bien
              </span>
              <span className="inline-flex items-center text-lg font-semibold text-primary">
                <i className="bi bi-cpu me-2"></i>
                Option SIN
              </span>
            </div>

            <p className="text-lg leading-relaxed md:text-xl">
              Formation axée sur l'innovation technologique et le développement
              durable. Spécialisation en Systèmes d'Information et Numérique
              (SIN).
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  Compétences acquises
                </h4>
                <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                  <li>Programmation Arduino</li>
                  <li>Bases de l'électronique</li>
                  <li>Initiation au développement</li>
                  <li>Gestion de projet technique</li>
                </ul>
              </div>

              <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  Projet principal - Grand Oral
                </h4>
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg">
                    Conception et réalisation d'une bouée connectée autonome,
                    mesurant l'impact du réchauffement climatique et de la
                    pollution via divers capteurs et un réseau basse
                    consommation.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      (window as any).timelineComponent?.onEnSavoirPlusClick()
                    }
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2022-2023',
    content: (
      <div className="space-y-6">
        <div className="bg-body rounded-2xl p-6 shadow-md">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            BUT Informatique - BUT1
          </h2>
          <h3 className="mb-2 text-xl text-muted md:text-2xl">
            IUT de Blagnac - Université Toulouse 2 - Jean Jaures
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center text-lg font-semibold text-primary">
                <i className="bi bi-cpu me-2"></i>
                Formation en développement logiciel
              </span>
            </div>

            <p className="text-lg leading-relaxed md:text-xl">
              Formation axée sur le développement logiciel et les bases de
              données.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  Formation
                </h4>
                <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                  <li>Base de l'algorithmique</li>
                  <li>Base de Java</li>
                  <li>Principe fondamentaaux de Bases de données</li>
                  <li>Introduction à la gestion de projet</li>
                  <li>Base du développement Web</li>
                  <li>Base de C</li>
                  <li>Base de Python</li>
                  <li>Java FX</li>
                </ul>
                <br />
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  Projets académiques
                </h4>
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg">
                    Première année de BUT Informatique avec une introduction aux
                    fondamentaux du développement et à la gestion de projets
                    informatiques. Participation à plusieurs projets pratiques
                    en équipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-body-tertiary mt-6 rounded-2xl p-4 shadow-sm">
              <h4 className="mb-3 text-xl font-semibold text-primary">
                <i className="bi bi-tools me-2"></i>
                Technologies maîtrisées
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="badge fs-6 bg-primary px-2 py-1">
                  <i className="bi bi-globe me-1"></i>Développement Web
                </span>
                <span className="badge fs-6 bg-primary px-2 py-1">
                  <i className="bi bi-filetype-java me-1"></i>Java
                </span>
                <span className="badge fs-6 bg-primary px-2 py-1">
                  <i className="bi bi-filetype-py me-1"></i>Python
                </span>
                <span className="badge fs-6 bg-primary px-2 py-1">
                  <i className="bi bi-code-slash me-1"></i>C
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2023-2024',
    content: (
      <div>
        <div className="space-y-6">
          <div className="bg-body rounded-2xl p-6 shadow-md">
            <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
              BUT2 Informatique en alternance
            </h2>
            <h3 className="mb-2 text-xl text-muted md:text-2xl">
              IUT de Blagnac - Université Toulouse 2 - Jean Jaures
            </h3>
            <h3 className="mb-2 flex items-center gap-2 text-xl text-muted md:text-2xl">
              <img
                src="/assets/images/equans_ineo.webp"
                alt="Logo EQUANS"
                width="120"
                height="55"
                className="h-14 overflow-hidden rounded-xl"
              />
              Alternance chez EQUANS INEO MPLR
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center text-lg font-semibold text-primary">
                  <i className="bi bi-cpu me-2"></i>
                  Formation en développement logiciel
                </span>
              </div>

              <p className="text-lg leading-relaxed md:text-xl">
                Alternance chez EQUANS INEO MPLR en tant que développeur
                FullStack, travaillant sur une solution innovante de gestion des
                vulnérabilités de nos produits et infrastructures. Formation
                académique en parallèle au sein de l'IUT de Blagnac pour une
                montée en compétences complète.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                  <h4 className="mb-3 text-xl font-semibold text-primary">
                    Formation Approfondie
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                    <li>Développement Web Avancé (Angular, VueJS)</li>
                    <li>Backend avec Django et PHP</li>
                    <li>Bases de données SQL avancées</li>
                    <li>IoT avec M5 Stack</li>
                    <li>Développement Mobile Android</li>
                    <li>DevOps et intégration continue</li>
                  </ul>
                </div>

                <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                  <h4 className="mb-3 text-xl font-semibold text-primary">
                    Expérience Professionnelle
                  </h4>
                  <div className="flex flex-col gap-3">
                    <p className="text-base md:text-lg">
                      En alternance chez EQUANS INEO MPLR, développement d'une
                      solution de gestion des vulnérabilités. Application web
                      complète avec :
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                      <li>Frontend Angular avec Material Design</li>
                      <li>API REST Django</li>
                      <li>Base de données PostgreSQL</li>
                      <li>Intégration continue avec GitLab CI</li>
                      <li>
                        Mise en place d'une architecture microservices (Docker)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-body-tertiary mt-6 rounded-2xl p-4 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  <i className="bi bi-tools me-2"></i>
                  Technologies maîtrisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-code-square me-1"></i>Angular
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-database me-1"></i>SQL Approfondi
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-phone me-1"></i>Android
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-diagram-3 me-1"></i>Django
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-braces me-1"></i>VueJS
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-cpu me-1"></i>IoT
                  </span>

                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-boxes me-1"></i>Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2024-2025',
    content: (
      <div>
        <div className="space-y-6">
          <div className="bg-body rounded-2xl p-6 shadow-md">
            <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
              BUT3 Informatique en alternance
            </h2>
            <h3 className="mb-2 text-xl text-muted md:text-2xl">
              IUT de Blagnac - Université Toulouse 2 - Jean Jaures
            </h3>
            <h3 className="mb-2 flex items-center gap-2 text-xl text-muted md:text-2xl">
              <img
                src="/assets/images/equans_ineo.webp"
                alt="Logo EQUANS"
                width="120"
                height="55"
                className="h-14 overflow-hidden rounded-xl"
              />
              Alternance chez EQUANS INEO MPLR
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center text-lg font-semibold text-primary">
                  <i className="bi bi-cpu me-2"></i>
                  Formation avancée en développement et DevOps
                </span>
              </div>

              <p className="text-lg leading-relaxed md:text-xl">
                Dernière année de BUT en alternance, axée sur des projets
                complexes et innovants. Développement d'une solution fullstack
                complète avec relation client et mise en situation
                professionnelle. Approfondissement des compétences en DevOps et
                architectures modernes.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                  <h4 className="mb-3 text-xl font-semibold text-primary">
                    Formation Approfondie
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                    <li>Bases de données graphes (Neo4J)</li>
                    <li>Bases de données vectorielles (PGVector)</li>
                    <li>RAG et Intelligence Artificielle</li>
                    <li>Développement PHP Symfony</li>
                    <li>Java Spring avancé</li>
                    <li>Analyse statistique avec R</li>
                    <li>DevOps et CI/CD</li>
                    <li>Virtualisation (Docker, K8s)</li>
                  </ul>
                </div>

                <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
                  <h4 className="mb-3 text-xl font-semibold text-primary">
                    Expérience Professionnelle
                  </h4>
                  <div className="flex flex-col gap-3">
                    <p className="text-base md:text-lg">
                      Toujours en alternance chez EQUANS INEO MPLR,
                      développement d'une solution de gestion des
                      vulnérabilités. Application web complète avec :
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-base md:text-lg">
                      <li>Architecture microservices</li>
                      <li>Gestion de base de données graphe</li>
                      <li>Intégration IA et RAG</li>
                      <li>Pipeline CI/CD complet</li>
                      <li>Tests et qualité logicielle</li>
                    </ul>
                    <p className="text-base md:text-lg">
                      Mise en oeuvre de processus de recette de déploiement et
                      de tests. Démarche de garantie de la qualité logicielle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-body-tertiary mt-6 rounded-2xl p-4 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-primary">
                  <i className="bi bi-tools me-2"></i>
                  Technologies maîtrisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-diagram-3 me-1"></i>Neo4J
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-database me-1"></i>PGVector
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-robot me-1"></i>RAG
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-code-slash me-1"></i>Symfony
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-gear me-1"></i>Spring
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-graph-up me-1"></i>R
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-infinity me-1"></i>CI/CD
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-boxes me-1"></i>Docker/K8s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2025-20...',
    content: (
      <div>
        <div className="bg-body rounded-2xl p-6 shadow-md">
          <div className="space-y-6">
            <div className="bg-body-tertiary rounded-2xl p-4 shadow-sm">
              <h4 className="mb-3 text-xl font-semibold text-primary">
                <i className="bi bi-mortarboard me-2"></i>
                École d'Ingénieur - Spécialisation dans l'Intelligence
                Artificielle
              </h4>
              <div className="flex flex-col gap-3">
                <p className="text-base md:text-lg">
                  Potentielle poursuite d'études en école d'ingénieur avec un
                  cursus de spécialisation dans l'Intelligence Artificielle.
                  Formation approfondie sur les technologies d'IA, le machine
                  learning et le deep learning. 🤞🏻
                  <br /> <br />
                  Mon expérience préalable dans la mise en œuvre d'une
                  application de RAG (Retrieval Augmented Generation) m'a permis
                  de découvrir les technologies autour de l'intelligence
                  artificielle, et cette immersion m'a donné envie de continuer
                  dans cette voie.
                </p>
                <button
                  className="btn btn-primary mt-4 d-inline-block px-3 py-2"
                  style={{
                    fontSize: '0.9rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease-in-out',
                  }}
                  onClick={() => {
                    const navigationService = (window as any).navigationService;
                    if (navigationService) {
                      navigationService.navigateToProject('django-rag');
                    }
                  }}
                >
                  <i className="bi bi-eye me-2"></i>
                  Voir le projet RAG
                </button>
                <hr className="my-4" />
                <div className="flex flex-wrap gap-2">
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-robot me-1"></i>Intelligence
                    Artificielle
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-building me-1"></i>Alternance
                  </span>
                  <span className="badge fs-6 bg-primary px-2 py-1">
                    <i className="bi bi-mortarboard me-1"></i>École d'Ingénieur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
