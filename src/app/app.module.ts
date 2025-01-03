import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeToggleComponent } from './navbar/dark-mode-toggle/dark-mode-toggle.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectDropdownComponent } from './navbar/project-dropdown/project-dropdown.component';
import { CompetencesComponent } from './competences/competences.component';
import { ActiveLinkDirective } from './directives/active-link.directive';
import { ProjectsCoreModule } from './projects-core/projects-core.module';
import { ProjectsModule } from './projects-core/projects/projects.module';

import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent,
    NavbarComponent,
    HomeComponent,
    ProjectDropdownComponent,
    CompetencesComponent,
    ActiveLinkDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    ProjectsCoreModule,
    ProjectsModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideExperimentalZonelessChangeDetection()],
})
export class AppModule {}
