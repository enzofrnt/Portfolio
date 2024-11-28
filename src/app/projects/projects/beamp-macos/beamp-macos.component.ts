import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-beamp-macos',
  templateUrl: './beamp-macos.component.html',
  styleUrl: './beamp-macos.component.scss',
})
export class BeampMacosComponent implements Project {
  id = 'beamp-macos';
  name = 'Beamp MacOS Port';
  description = 'Le client MacOS de Beamp.';
  type = ProjectType.PERSO;
}
