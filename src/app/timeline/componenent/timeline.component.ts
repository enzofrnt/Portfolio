import { Component, ViewEncapsulation } from '@angular/core';
import type { ComponentProps } from 'react';
import { Timeline } from '../react/timeline';
import { timelineData } from '../react/timeline-content';

interface CustomWindow extends Window {
  timelineComponent?: TimelineComponent;
}

declare const bootstrap: {
  Modal: new (
    element: HTMLElement | string,
    options?: Record<string, unknown>,
  ) => {
    show: () => void;
    hide: () => void;
  };
};

declare const window: CustomWindow;

@Component({
  selector: 'app-timeline',
  standalone: false,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  Timeline = Timeline;
  TimelineProps: ComponentProps<typeof Timeline> = {
    data: timelineData,
  };

  constructor() {
    window.timelineComponent = this;
  }

  onEnSavoirPlusClick() {
    const myModal = new bootstrap.Modal('#grandOralModal');
    myModal.show();
  }
}
