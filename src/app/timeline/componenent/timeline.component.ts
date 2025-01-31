import { Component, ViewEncapsulation } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactComponentDirective } from '../../directives/react-component.directive';
import { TimelineDemo } from '../react/demo';

@Component({
  selector: 'app-timeline',
  standalone: false,
  // imports: [CommonModule, ReactComponentDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  TimelineDemo = TimelineDemo;
}
