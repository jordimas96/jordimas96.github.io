import { Component, inject } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    selector: 'app-example',
    template: `
    <button (click)="trackButtonClick()">Track Button Click</button>
  `
})
export class ExampleComponent {
    
    private gaService = inject(GoogleAnalyticsService);

    trackButtonClick() {
        this.gaService.event('button', 'click', 'Example Button Click');
    }
    trackAccessHome() {
        this.gaService.event('button', 'click', 'Example Button Click');
    }
}
