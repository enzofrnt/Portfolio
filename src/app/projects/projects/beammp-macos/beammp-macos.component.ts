import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
    selector: 'app-beammp-macos',
    templateUrl: './beammp-macos.component.html',
    styleUrl: './beammp-macos.component.scss',
    standalone: false
})
export class BeamMPMacosComponent implements Project {
  id = 'beammp-macos';
  name = 'BeamMP MacOS Port';
  description = 'Port du client BeamMP sur MacOS';
  type = ProjectType.PERSO;
  link = 'https://github.com/BeamMP/BeamMP-Launcher/pull/147';
}
