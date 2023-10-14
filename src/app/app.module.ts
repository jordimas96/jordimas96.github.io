import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppbarComponent } from './components/appbar/appbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImatgeScrollComponent } from './components/imatge-scroll/imatge-scroll.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetBlankDirective } from './directives/target-blank.directive';
import { SkillComponent } from './components/skill/skill.component';
import { GoogleAnalyticsModule } from './google-analytics/google-analytics.module';
import { QRCodeModule } from 'angularx-qrcode';
import { NavegacioTabComponent } from './components/appbar/navegacio-tab/navegacio-tab.component';
import { MadJumpgateComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { DetallsAndroidAppsComponent } from './pages/projects-page/detalls-android-apps/detalls-android-apps.component';
import { SmoothMoveDirective } from './directives/smooth-move.directive';
import { NexxiaComponent } from './pages/experience-page/nexxia/nexxia.component';
import { IndraComponent } from './pages/experience-page/indra/indra.component';
import { MaticComponent } from './pages/experience-page/matic/matic.component';
import { In2artComponent } from './pages/experience-page/in2art/in2art.component';
import { OrangeComponent } from './pages/experience-page/orange/orange.component';

@NgModule({
    declarations: [
        AppComponent,

        // Components //
        AppbarComponent,
        FooterComponent,
        ImatgeScrollComponent,
    
        // Pages //
        HomePageComponent,
        ExperiencePageComponent,
        ProjectsPageComponent,

        TargetBlankDirective,
        SkillComponent,
        NavegacioTabComponent,
        MadJumpgateComponent,
        DetallsAndroidAppsComponent,
        SmoothMoveDirective,
        NexxiaComponent,
        IndraComponent,
        MaticComponent,
        In2artComponent,
        OrangeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        GoogleAnalyticsModule,
        QRCodeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
