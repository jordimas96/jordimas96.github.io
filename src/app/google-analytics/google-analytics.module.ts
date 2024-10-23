import { NgModule } from '@angular/core';
import { GoogleAnalyticsService, NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
    imports: [NgxGoogleAnalyticsModule.forRoot("G-W0GMXKXDST")],
    providers: [GoogleAnalyticsService]
})
export class GoogleAnalyticsModule { }
