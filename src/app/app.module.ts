import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NavegacioTabComponent } from './components/appbar/navegacio-tab/navegacio-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImatgeScrollComponent } from './components/imatge-scroll/imatge-scroll.component';
import { IndexComponent } from './components/index/index.component';
import { DarkModeComponent } from './components/sidebar/dark-mode/dark-mode.component';
import { SelectorIdiomaComponent } from './components/sidebar/selector-idioma/selector-idioma.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillComponent } from './components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from './directives/mostrar-amb-animacio.directive';
import { SmoothMoveDirective } from './directives/smooth-move.directive';
import { TargetBlankDirective } from './directives/target-blank.directive';
import { GoogleAnalyticsModule } from './google-analytics/google-analytics.module';
import { AmazfitWatchfacesComponent } from './pages/art-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { IconsComponent } from './pages/art-page/icons/icons.component';
import { NexxiaComponent } from './pages/experience-page/1 nexxia/nexxia.component';
import { IndraComponent } from './pages/experience-page/2 indra/indra.component';
import { MaticComponent } from './pages/experience-page/3 matic/matic.component';
import { In2artComponent } from './pages/experience-page/4 in2art/in2art.component';
import { OrangeComponent } from './pages/experience-page/5 orange/orange.component';
import { EvoraComponent } from './pages/experience-page/6 evora/evora.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { BioComponent } from './pages/home-page/bio/bio.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LanguagesComponent } from './pages/home-page/languages/languages.component';
import { AndroidAppsComponent } from './pages/projects-page/android-apps/android-apps.component';
import { DetallsAndroidAppsComponent } from './pages/projects-page/android-apps/detalls-android-apps/detalls-android-apps.component';
import { CustomRomsComponent } from './pages/projects-page/custom-roms/custom-roms.component';
import { GithubProjectsComponent } from './pages/projects-page/github-projects/github-projects.component';
import { MadJumpgateGameplayComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate-joc/mad-jumpgate-joc.component';
import { MadJumpgateComponent } from './pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TaskerComponent } from './pages/projects-page/tasker/tasker.component';
import { SectionPageComponent } from './pages/section-page/section-page.component';


@NgModule({
    declarations: [
        AppComponent,

        // Components //
        AppbarComponent,
        SidebarComponent,
        IndexComponent,
        FooterComponent,
        ImatgeScrollComponent,
        DarkModeComponent,
        NavegacioTabComponent,
        SelectorIdiomaComponent,
        SkillComponent,

        // Pages //
        HomePageComponent,
        ExperiencePageComponent,
        ProjectsPageComponent,
        ArtPageComponent,
        SectionPageComponent,

        // Directives //
        MostrarAmbAnimacioDirective,
        SmoothMoveDirective,
        TargetBlankDirective,


        BioComponent,
        LanguagesComponent,

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
        GithubProjectsComponent,

        AmazfitWatchfacesComponent,
        IconsComponent,

        DetallsAndroidAppsComponent,
        MadJumpgateGameplayComponent,
        MadJumpgateJocComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        GoogleAnalyticsModule,
        QRCodeModule,
        DragDropModule,
        HttpClientModule,
        NgxMasonryModule,
        BrowserAnimationsModule,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
