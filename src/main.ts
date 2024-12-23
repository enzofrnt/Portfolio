import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DarkModeService } from './app/services/dark-mode.service';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    const darkModeService = moduleRef.injector.get(DarkModeService);

    // Appliquer le thème au body ou html
    const theme = darkModeService.darkModeSignal();
    document.documentElement.setAttribute('data-bs-theme', theme); // html
    document.body.setAttribute('data-bs-theme', theme); // optionnel
  })
  .catch((err) => console.error(err));
