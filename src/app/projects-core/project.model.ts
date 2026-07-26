export enum ProjectType {
  IUT = 'iut',
  PERSO = 'perso',
}

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  link?: string;
  keywords?: string[];
  /** false si le projet n'a pas de logo dans assets/images/<id>.webp. */
  hasLogo?: boolean;
}
