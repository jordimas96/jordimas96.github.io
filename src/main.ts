import { DragDropModule } from '@angular/cdk/drag-drop';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { GoogleAnalyticsModule } from './app/google-analytics/google-analytics.module';
import { AppInitializerService } from './app/services/app-initializer.service';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            NgbModule,
            AppRoutingModule,
            FormsModule,
            GoogleAnalyticsModule,
            DragDropModule,
            NgxMasonryModule
        ),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),

        provideAppInitializer(() => {
            return inject(AppInitializerService).init();
        })
    ]
})
    .catch(err => console.error(err));
