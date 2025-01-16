type HexColor = `#${string}`;

export interface Niveau {
  titre: string;
  description: string;
}
export interface Competence {
  title: string;
  color: HexColor;
  niveaux: Niveau[];
}
