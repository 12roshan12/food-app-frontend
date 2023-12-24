import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { SharedModule } from '../shared/shared.module';
import { AppMainModule } from './app-main.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideClientHydration(withHttpTransferCacheOptions({includePostRequests: true})), 
    importProvidersFrom( SharedModule,AppMainModule,BrowserAnimationsModule,BrowserModule,  ), 
     provideAnimations(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};
