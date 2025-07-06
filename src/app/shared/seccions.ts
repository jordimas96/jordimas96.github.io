
import { ComponentType } from '@angular/cdk/portal';

import { NexxiaComponent } from 'src/app/pages/experience-page/2016-10-nexxia/nexxia.component';
import { TecnocomComponent } from 'src/app/pages/experience-page/2017-09-tecnocom/tecnocom.component';
import { MaticComponent } from 'src/app/pages/experience-page/2020-09-matic/matic.component';
import { In2artComponent } from 'src/app/pages/experience-page/2021-08-in2art/in2art.component';
import { OrangeComponent } from 'src/app/pages/experience-page/2023-08-orange/orange.component';
import { EvoraComponent } from 'src/app/pages/experience-page/2023-11-evora/evora.component';
import { IndraComponent } from 'src/app/pages/experience-page/2024-06-indra/indra.component';

import { AndroidAppsComponent } from 'src/app/pages/projects-page/android-apps/android-apps.component';
import { CustomRomsComponent } from 'src/app/pages/projects-page/custom-roms/custom-roms.component';
import { GithubProjectsComponent } from 'src/app/pages/projects-page/github-projects/github-projects.component';
import { MadJumpgateComponent } from 'src/app/pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { TaskerComponent } from 'src/app/pages/projects-page/tasker/tasker.component';

import { AmazfitWatchfacesComponent } from 'src/app/pages/art-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { IconsComponent } from 'src/app/pages/art-page/icons/icons.component';


export interface Seccio {
    nom: string;
    pagina: string;
    component: ComponentType<any>;
}

export const SECCIONS: Seccio[] = [

    { nom: "indra", pagina: "/experience", component: IndraComponent },
    { nom: "in2art", pagina: "/experience", component: In2artComponent },
    { nom: "matic", pagina: "/experience", component: MaticComponent },
    { nom: "evora", pagina: "/experience", component: EvoraComponent },
    { nom: "orange", pagina: "/experience", component: OrangeComponent },
    { nom: "tecnocom", pagina: "/experience", component: TecnocomComponent },
    { nom: "nexxia", pagina: "/experience", component: NexxiaComponent },

    { nom: "android", pagina: "/projects", component: AndroidAppsComponent },
    { nom: "mad-jumpgate", pagina: "/projects", component: MadJumpgateComponent },
    { nom: "github", pagina: "/projects", component: GithubProjectsComponent },
    { nom: "custom-roms", pagina: "/projects", component: CustomRomsComponent },
    { nom: "tasker", pagina: "/projects", component: TaskerComponent },

    { nom: "icons", pagina: "/art", component: IconsComponent },
    { nom: "amazfit", pagina: "/art", component: AmazfitWatchfacesComponent },
];
