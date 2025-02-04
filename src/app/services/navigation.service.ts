import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToProject(projectId: string) {
    this.router.navigate(['/projects', projectId]);
  }
}
