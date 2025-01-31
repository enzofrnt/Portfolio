import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  selector: '[appReactComponent]',
  standalone: false,
})
export class ReactComponentDirective<Comp extends ElementType>
  implements OnChanges, OnDestroy
{
  // @Input() reactComponent: Comp;
  // @Input() props: ComponentProps<Comp>;
  @Input() appReactComponent!: Comp;
  @Input() props: ComponentProps<Comp> = {} as ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {
    this.root.render(createElement(this.appReactComponent, this.props));
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
