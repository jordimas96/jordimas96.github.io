import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { PageComponent } from '../page.component';
import { AndroidAppsComponent } from './android-apps/android-apps.component';
import { CustomRomsComponent } from './custom-roms/custom-roms.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { MadJumpgateComponent } from './mad-jumpgate/mad-jumpgate.component';
import { TaskerComponent } from './tasker/tasker.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss', '../page.scss'],
    standalone: true,
    imports: [
        RouterLink,
        MostrarAmbAnimacioDirective,
        AndroidAppsComponent,
        MadJumpgateComponent,
        GithubProjectsComponent,
        CustomRomsComponent,
        TaskerComponent,
    ]
})
export class ProjectsPageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Projects";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
