import { Competence } from '../competences/competence';

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
  competences?: Competence[];
}
