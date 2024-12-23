import { Component } from '@angular/core';
import { Project, ProjectType } from '../../project.model';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent implements Project {
  id = 'memory';
  name = 'Memory';
  description = "Un jeu de memory pour s'amuser et tester sa mémoire. javaFX";
  type = ProjectType.IUT;
  link = 'https://github.com/enzofrnt/Memory';
}
