import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactComponentDirective } from '../directives/react-component.directive';
import { TimelineComponent } from './componenent/timeline.component';

@NgModule({
  declarations: [TimelineComponent, ReactComponentDirective],
  imports: [CommonModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}
