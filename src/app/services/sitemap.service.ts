import { Injectable } from '@angular/core';
import { allRoutes } from '../app-routing.module';
import { ProjectCoreService } from '../projects-core/project-core.service';

@Injectable({
  providedIn: 'root',
})
export class SitemapService {
  private baseUrl = 'https://enzo-frnt.fr';

  constructor(private projectService: ProjectCoreService) {}

  generateSitemap(): string {
    const routes = this.getAllRoutes();
    const xml = this.generateXml(routes);
    return xml;
  }

  private getAllRoutes(): string[] {
    // Récupérer les routes de base
    const baseRoutes = allRoutes.map((route) => route.path || '');

    // Récupérer les routes des projets
    const projectRoutes = this.projectService
      .getRoutes()
      .map((route) => `projects/${route.path}`);

    return [...baseRoutes, ...projectRoutes];
  }

  private generateXml(routes: string[]): string {
    const urlset = routes
      .map((route) => {
        const url = `${this.baseUrl}/${route}`;
        return `
    <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`;
      })
      .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
  }
}
