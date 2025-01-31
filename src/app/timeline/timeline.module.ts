import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './componenent/timeline.component';
import { ReactComponentDirective } from '../directives/react-component.directive';

@NgModule({
  declarations: [TimelineComponent, ReactComponentDirective],
  imports: [CommonModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}
