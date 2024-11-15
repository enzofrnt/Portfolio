export enum ProjectType {
  IUT = 'iut',
  PERSO = 'perso',
}

export interface Project {
  id: string;
  name: string;
  description: string;
  path: string;
  type: ProjectType;
}
