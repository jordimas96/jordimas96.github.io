import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AmazfitWatchfacesComponent } from 'src/app/pages/art-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { IconsComponent } from 'src/app/pages/art-page/icons/icons.component';
import { NexxiaComponent } from 'src/app/pages/experience-page/2016-10-nexxia/nexxia.component';
import { TecnocomComponent } from 'src/app/pages/experience-page/2017-09-tecnocom/tecnocom.component';
import { MaticComponent } from 'src/app/pages/experience-page/2020-09-matic/matic.component';
import { In2artComponent } from 'src/app/pages/experience-page/2021-08-in2art/in2art.component';
import { OrangeComponent } from 'src/app/pages/experience-page/2023-08-orange/orange.component';
import { EvoraComponent } from 'src/app/pages/experience-page/2023-11-evora/evora.component';
import { IndraComponent } from 'src/app/pages/experience-page/2024-06-indra/indra.component';
import { PageComponent } from 'src/app/pages/page.component';
import { AndroidAppsComponent } from 'src/app/pages/projects-page/android-apps/android-apps.component';
import { CustomRomsComponent } from 'src/app/pages/projects-page/custom-roms/custom-roms.component';
import { GithubProjectsComponent } from 'src/app/pages/projects-page/github-projects/github-projects.component';
import { MadJumpgateComponent } from 'src/app/pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { TaskerComponent } from 'src/app/pages/projects-page/tasker/tasker.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-section-page',
    templateUrl: './section-page.component.html',
    styleUrl: './section-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        NexxiaComponent,
        TecnocomComponent,
        MaticComponent,
        In2artComponent,
        OrangeComponent,
        EvoraComponent,
        IndraComponent,
        AndroidAppsComponent,
        MadJumpgateComponent,
        GithubProjectsComponent,
        CustomRomsComponent,
        TaskerComponent,
        IconsComponent,
        AmazfitWatchfacesComponent,
    ]
})
export class SectionPageComponent extends PageComponent {

    public section: string;
    public optionBack: number = 0;
    public urlGoBack: string = "";

    constructor(
        override m: MainService,
        public route: ActivatedRoute,
    ) {
        super(m);
    }

    override async ngOnInit() {
        super.ngOnInit();

        this.route.params.subscribe(params => {
            this.section = params['section'];

            // this.urlGoBack = "/" + ["", "experience", "projects", "art"][this.optionBack];
            this.urlGoBack = "/";
        });
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

    getNameGoBack() {
        return [
            ["Inici", "Inicio", "Home"],
            ["Experiència", "Experiencia", "Experience"],
            ["Projectes", "Proyectos", "Projects"],
            ["Art", "Arte", "Art"],
        ][this.optionBack][this.m.idiomaIndex];
    }
}
