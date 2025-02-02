import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProjectCoreService } from './project-core.service';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const baseRoutes: Routes = [{ path: '', component: ProjectsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(baseRoutes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (router: Router, projectService: ProjectCoreService) => {
        return () => {
          const childRoutes = router.config.find(
            (route) => route.path === 'projects',
          );
          if (childRoutes) {
            const routes = [...baseRoutes, ...projectService.getRoutes()];
            childRoutes.children = routes;
          }
          return Promise.resolve();
        };
      },
      deps: [Router, ProjectCoreService],
      multi: true,
    },
  ],
})
export class ProjectsRoutingModule {}
