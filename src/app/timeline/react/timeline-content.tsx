import React from 'react';

export const timelineData = [
  {
    title: '2021-2022',
    content: (
      <div className="space-y-6">
        <div className="p-6 rounded-2xl shadow-md bg-body">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            BAC STI2D
          </h2>
          <h3 className="text-xl md:text-2xl text-muted mb-2">
            Lycée Charles de Gaulle - Muret (31)
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center font-semibold text-success text-lg">
                <i className="bi bi-award me-2"></i>
                Mention Bien
              </span>
              <span className="inline-flex items-center font-semibold text-primary text-lg">
                <i className="bi bi-cpu me-2"></i>
                Option SIN
              </span>
            </div>

            <p className="text-lg md:text-xl leading-relaxed">
              Formation axée sur l'innovation technologique et le développement
              durable. Spécialisation en Systèmes d'Information et Numérique
              (SIN).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3 text-primary text-xl">
                  Compétences acquises
                </h4>
                <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                  <li>Programmation Arduino</li>
                  <li>Bases de l'électronique</li>
                  <li>Initiation au développement</li>
                  <li>Gestion de projet technique</li>
                </ul>
              </div>

              <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3 text-primary text-xl">
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
        <div className="p-6 rounded-2xl shadow-md bg-body">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            BUT Informatique - BUT1
          </h2>
          <h3 className="text-xl md:text-2xl text-muted mb-2">
            IUT de Blagnac - Université Toulouse 2 - Jean Jaures
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center font-semibold text-primary text-lg">
                <i className="bi bi-cpu me-2"></i>
                Formation en développement logiciel
              </span>
            </div>

            <p className="text-lg md:text-xl leading-relaxed">
              Formation axée sur le développement logiciel et les bases de
              données.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3 text-primary text-xl">
                  Formation
                </h4>
                <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                  <li>Entrée en BUT Informatique</li>
                  <li>IUT de Blagnac - Université Toulouse 2</li>
                  <li>Formation en développement logiciel</li>
                  <li>Apprentissage des bases de données</li>
                  <li>Introduction à la gestion de projet</li>
                </ul>
              </div>

              <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3 text-primary text-xl">
                  Projets académiques
                </h4>
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg">
                    Première année de BUT Informatique avec une introduction aux
                    fondamentaux du développement et à la gestion de projets
                    informatiques. Participation à plusieurs projets pratiques
                    en équipe.
                  </p>
                  {/* <button
                    className="btn btn-primary"
                    onClick={() =>
                      (window as any).timelineComponent?.onEnSavoirPlusClick()
                    }
                  >
                    En savoir plus
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm mt-6">
              <h4 className="font-semibold mb-3 text-primary text-xl">
                <i className="bi bi-search me-2"></i>
                Recherche d'alternance
              </h4>
              <div className="flex flex-col gap-3">
                <p className="text-base md:text-lg">
                  Recherche d'une alternance pour la rentrée 2024 dans le
                  domaine du développement logiciel. Je suis particulièrement
                  intéressé par les technologies web et les applications
                  modernes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge bg-primary fs-6 px-2 py-1">
                    <i className="bi bi-globe me-1"></i>Développement Web
                  </span>
                  <span className="badge bg-primary fs-6 px-2 py-1">
                    <i className="bi bi-filetype-java me-1"></i>Java
                  </span>
                  <span className="badge bg-primary fs-6 px-2 py-1">
                    <i className="bi bi-filetype-py me-1"></i>Python
                  </span>
                  <span className="badge bg-primary fs-6 px-2 py-1">
                    <i className="bi bi-code-slash me-1"></i>C
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
    title: '2023-2024',
    content: (
      <div>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl shadow-md bg-body">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              BUT2 Informatique en alternance
            </h2>
            <h3 className="text-xl md:text-2xl text-muted mb-2">
              IUT de Blagnac - Université Toulouse 2 - Jean Jaures
            </h3>
            <h3 className="text-xl md:text-2xl text-muted mb-2 flex items-center gap-2">
              <img
                src="/assets/images/equans_ineo.jpg"
                alt="Logo EQUANS"
                className="h-8"
              />
              Alternance chez EQUANS INEO MPLR
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center font-semibold text-primary text-lg">
                  <i className="bi bi-cpu me-2"></i>
                  Formation en développement logiciel
                </span>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                Formation axée sur le développement logiciel et les bases de
                données.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary text-xl">
                    Formation
                  </h4>
                  <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                    <li>Entrée en BUT Informatique</li>
                    <li>IUT de Blagnac - Université Toulouse 2</li>
                    <li>Formation en développement logiciel</li>
                    <li>Apprentissage des bases de données</li>
                    <li>Introduction à la gestion de projet</li>
                  </ul>
                </div>

                <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary text-xl">
                    Projets académiques
                  </h4>
                  <div className="flex flex-col gap-3">
                    <p className="text-base md:text-lg">
                      Première année de BUT Informatique avec une introduction
                      aux fondamentaux du développement et à la gestion de
                      projets informatiques. Participation à plusieurs projets
                      pratiques en équipe.
                    </p>
                    {/* <button
                  className="btn btn-primary"
                  onClick={() =>
                    (window as any).timelineComponent?.onEnSavoirPlusClick()
                  }
                >
                  En savoir plus
                </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm mt-6">
                <h4 className="font-semibold mb-3 text-primary text-xl">
                  <i className="bi bi-search me-2"></i>
                  Recherche d'alternance
                </h4>
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg">
                    Recherche d'une alternance pour la rentrée 2024 dans le
                    domaine du développement logiciel. Je suis particulièrement
                    intéressé par les technologies web et les applications
                    modernes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge bg-primary fs-6 px-2 py-1">
                      <i className="bi bi-globe me-1"></i>Développement Web
                    </span>
                    <span className="badge bg-primary fs-6 px-2 py-1">
                      <i className="bi bi-filetype-java me-1"></i>Java
                    </span>
                    <span className="badge bg-primary fs-6 px-2 py-1">
                      <i className="bi bi-filetype-py me-1"></i>Python
                    </span>
                    <span className="badge bg-primary fs-6 px-2 py-1">
                      <i className="bi bi-code-slash me-1"></i>C
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
            <h4 className="font-semibold mb-3 text-primary text-xl">
              <i className="bi bi-building me-2"></i>
              BUT2 Informatique en alternance
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-base md:text-lg">
                Alternance chez INEO MPLR en tant que développeur FullStack
                d'une solution de gestion des failles de nos produits. Formation
                en parallèle au sein de l'IUT de Blagnac.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge bg-primary fs-6 px-2 py-1">
                  <i className="bi bi-building me-1"></i>INEO MPLR
                </span>
                <span className="badge bg-primary fs-6 px-2 py-1">
                  <i className="bi bi-mortarboard me-1"></i>BUT2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2024-2025',
    content: <div>Content 4</div>,
  },
  {
    title: '2025-202X',
    content: (
      <div>
        <div className="bg-body-tertiary p-4 rounded-2xl shadow-sm">
          <h4 className="font-semibold mb-3 text-primary text-xl">
            <i className="bi bi-mortarboard me-2"></i>
            École d'Ingénieur - Spécialisation dans l'Intelligence Artificielle
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-base md:text-lg">
              Potentielle poursuite d'études en école d'ingénieur avec un cursus
              de spécialisation dans l'Intelligence Artificielle. Formation
              approfondie sur les technologies d'IA, le machine learning et le
              deep learning. 🤞🏻
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge bg-primary fs-6 px-2 py-1">
                <i className="bi bi-robot me-1"></i>Intelligence Artificielle
              </span>
              <span className="badge bg-primary fs-6 px-2 py-1">
                <i className="bi bi-building me-1"></i>Alternance
              </span>
              <span className="badge bg-primary fs-6 px-2 py-1">
                <i className="bi bi-mortarboard me-1"></i>École d'Ingénieur
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
