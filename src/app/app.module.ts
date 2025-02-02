import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetencesModule } from './competences/competences.module';
import { CvComponent } from './cv/cv.component';
import { ActiveLinkDirective } from './directives/active-link.directive';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DarkModeToggleComponent } from './navbar/dark-mode-toggle/dark-mode-toggle.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ProjectDropdownComponent } from './navbar/project-dropdown/project-dropdown.component';
import { ProjectsCoreModule } from './projects-core/projects-core.module';
import { ProjectsModule } from './projects-core/projects/projects.module';
import { TimelineModule } from './timeline/timeline.module';
import { CodeBlockComponent } from './utils/code-block/code-block.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent,
    NavbarComponent,
    HomeComponent,
    ProjectDropdownComponent,
    ActiveLinkDirective,
    FooterComponent,
    CvComponent,
  ],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    ProjectsCoreModule,
    ProjectsModule,
    TimelineModule,
    CodeBlockComponent,
    CompetencesModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideClientHydration(withEventReplay()),
  ],
})
export class AppModule {}
