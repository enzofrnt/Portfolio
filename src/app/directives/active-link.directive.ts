import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appActiveLink]',
  standalone: false,
})
export class ActiveLinkDirective implements OnInit {
  @Input() appActiveLink = '';
  // @Input() appActiveLink = '';
  @Input() appActiveLinkStrict = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isActive = this.appActiveLinkStrict
          ? this.router.url === this.appActiveLink
          : this.router.url.includes(this.appActiveLink);

        if (isActive) {
          this.renderer.addClass(this.el.nativeElement, 'active');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      }
    });
  }
}
