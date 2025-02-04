import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { DarkModeService } from './services/dark-mode.service';
import { MetaService } from './services/meta.service';
import { NavigationService } from './services/navigation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'Portfolio-enzo_frnt';
  code = 'test';
  showScrollButton = false;

  constructor(
    public darkModeService: DarkModeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private navigationService: NavigationService,
  ) {
    if (typeof window !== 'undefined') {
      (window as any).navigationService = this.navigationService;
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({ title, description, keywords }: Data) => {
          this.metaService.updateTitle(title);
          this.metaService.updateDescription(description);
          this.metaService.updateKeywords(keywords);
          this.metaService.updateTag({
            property: 'og:type',
            content: 'website',
          });
          this.metaService.updateTag({
            property: 'og:title',
            content: title,
          });
          this.metaService.updateTag({
            property: 'og:description',
            content: description,
          });
          this.metaService.updateTag({
            property: 'og:image',
            content: 'https://enzo-frnt.fr/assets/images/pp.webp',
          });
          this.metaService.updateTag({
            property: 'og:url',
            content: 'https://enzo-frnt.fr',
          });
          this.metaService.updateTag({
            property: 'twitter:image',
            content: 'https://enzo-frnt.fr/assets/images/pp.webp',
          });
          this.metaService.updateTag({
            property: 'twitter:url',
            content: 'https://enzo-frnt.fr',
          });
          this.metaService.updateTag({
            property: 'twitter:description',
            content: description,
          });
          this.metaService.updateTag({
            property: 'twitter:title',
            content: title,
          });
        }),
      )
      .subscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
