import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-esp32-matter-rf',
  templateUrl: './esp32-matter-rf.component.html',
  styleUrl: './esp32-matter-rf.component.scss',
  standalone: false,
})
export class Esp32MatterRfComponent implements Project {
  id = 'esp32-matter-rf';
  name = 'ESP32 Matter RF';
  description =
    'Bridge Matter sur ESP32 pour piloter des appareils radio 433 MHz (CC1101)';
  type = ProjectType.PERSO;
  link = 'https://github.com/enzofrnt/ESP32-Matter-RF';
  hasLogo = false;
  keywords = [
    'ESP32',
    'Matter',
    'IoT',
    'Domotique',
    '433 MHz',
    'CC1101',
    'ESP-IDF',
    'C',
    'Embarqué',
    'Bridge',
  ];
}
