import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { DarkModeService } from './app/services/dark-mode.service';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    const darkModeService = moduleRef.injector.get(DarkModeService);

    if (isPlatformBrowser(moduleRef.injector.get(PLATFORM_ID))) {
      // Appliquer le thème au body ou html
      const theme = darkModeService.darkModeSignal();
      document.documentElement.setAttribute('data-bs-theme', theme);
      document.body.setAttribute('data-bs-theme', theme);
    }
  })
  .catch((err) => console.error(err));
