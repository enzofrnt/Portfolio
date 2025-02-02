import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import * as React from 'react';
import { ComponentProps, ElementType } from 'react';
import * as ReactDOM from 'react-dom/client';

@Directive({
  selector: '[appReactComponent]',
  standalone: false,
})
export class ReactComponentDirective<Comp extends ElementType>
  implements OnChanges, OnDestroy
{
  @Input() appReactComponent!: Comp;
  @Input() appReactProps: ComponentProps<Comp> = {} as ComponentProps<Comp>;

  private root: ReactDOM.Root | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.render();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.root) {
        this.root.unmount();
      }
    }
  }

  private render() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this.el.nativeElement);
    }

    const element = React.createElement(
      this.appReactComponent,
      this.appReactProps,
    );
    this.root.render(element);
  }
}
