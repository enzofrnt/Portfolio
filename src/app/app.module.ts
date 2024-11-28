import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectDropdownComponent } from './navbar/project-dropdown/project-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent,
    NavbarComponent,
    HomeComponent,
    ProjectDropdownComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
