import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NavegacioTabComponent } from './components/appbar/navegacio-tab/navegacio-tab.component';
import { SelectorIdiomaComponent } from './components/appbar/selector-idioma/selector-idioma.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImatgeScrollComponent } from './components/imatge-scroll/imatge-scroll.component';
import { SkillComponent } from './components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from './directives/mostrar-amb-animacio.directive';
import { SmoothMoveDirective } from './directives/smooth-move.directive';
import { TargetBlankDirective } from './directives/target-blank.directive';
import { GoogleAnalyticsModule } from './google-analytics/google-analytics.module';
import { NexxiaComponent } from './pages/experience-page/1 nexxia/nexxia.component';
import { IndraComponent } from './pages/experience-page/2 indra/indra.component';
import { MaticComponent } from './pages/experience-page/3 matic/matic.component';
import { In2artComponent } from './pages/experience-page/4 in2art/in2art.component';
import { OrangeComponent } from './pages/experience-page/5 orange/orange.component';
import { EvoraComponent } from './pages/experience-page/6 evora/evora.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AmazfitWatchfacesComponent } from './pages/projects-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { AndroidAppsComponent } from './pages/projects-page/android-apps/android-apps.component';
import { DetallsAndroidAppsComponent } from './pages/projects-page/android-apps/detalls-android-apps/detalls-android-apps.component';
import { CustomRomsComponent } from './pages/projects-page/custom-roms/custom-roms.component';
import { MadJumpgateJocComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate-joc/mad-jumpgate-joc.component';
import { MadJumpgateComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { OtherProjectsComponent } from './pages/projects-page/other-projects/other-projects.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TaskerComponent } from './pages/projects-page/tasker/tasker.component';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,

        // Components //
        AppbarComponent,
        FooterComponent,
        ImatgeScrollComponent,
        NavegacioTabComponent,
        SelectorIdiomaComponent,
        SkillComponent,
    
        // Pages //
        HomePageComponent,
        ExperiencePageComponent,
        ProjectsPageComponent,

        // Directives //
        MostrarAmbAnimacioDirective,
        SmoothMoveDirective,
        TargetBlankDirective,


        NexxiaComponent,
        IndraComponent,
        MaticComponent,
        In2artComponent,
        OrangeComponent,
        EvoraComponent,

        AndroidAppsComponent,
        MadJumpgateComponent,
        CustomRomsComponent,
        TaskerComponent,
        AmazfitWatchfacesComponent,
        OtherProjectsComponent,

        DetallsAndroidAppsComponent,
        MadJumpgateJocComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        GoogleAnalyticsModule,
        QRCodeModule,
        HttpClientModule,
        NgxMasonryModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
