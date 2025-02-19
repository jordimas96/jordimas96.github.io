import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AmazfitWatchfacesComponent } from 'src/app/pages/art-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { IconsComponent } from 'src/app/pages/art-page/icons/icons.component';
import { NexxiaComponent } from 'src/app/pages/experience-page/1 nexxia/nexxia.component';
import { IndraComponent } from 'src/app/pages/experience-page/2 indra/indra.component';
import { MaticComponent } from 'src/app/pages/experience-page/3 matic/matic.component';
import { In2artComponent } from 'src/app/pages/experience-page/4 in2art/in2art.component';
import { OrangeComponent } from 'src/app/pages/experience-page/5 orange/orange.component';
import { EvoraComponent } from 'src/app/pages/experience-page/6 evora/evora.component';
import { AlveaComponent } from 'src/app/pages/experience-page/7 alvea/alvea.component';
import { PageComponent } from 'src/app/pages/page.component';
import { AndroidAppsComponent } from 'src/app/pages/projects-page/android-apps/android-apps.component';
import { CustomRomsComponent } from 'src/app/pages/projects-page/custom-roms/custom-roms.component';
import { GithubProjectsComponent } from 'src/app/pages/projects-page/github-projects/github-projects.component';
import { MadJumpgateComponent } from 'src/app/pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { TaskerComponent } from 'src/app/pages/projects-page/tasker/tasker.component';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-section-page',
    templateUrl: './section-page.component.html',
    styleUrl: './section-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        NexxiaComponent,
        IndraComponent,
        MaticComponent,
        In2artComponent,
        OrangeComponent,
        EvoraComponent,
        AlveaComponent,
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

    override async ngOnInit() {
        super.ngOnInit();

        this.route.params.subscribe(params => {
            this.section = params['section'];
            
            // if (["alvea", "evora", "orange", "in2art", "matic", "indra", "nexxia"].includes(this.section))
            //     this.optionBack = 1;
            // else if (["android", "mad-jumpgate", "github", "custom-roms", "tasker"].includes(this.section))
            //     this.optionBack = 2;
            // else if (["icons", "amazfit"].includes(this.section))
            //     this.optionBack = 3;
            
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
