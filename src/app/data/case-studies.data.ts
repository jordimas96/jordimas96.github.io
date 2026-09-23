import { AndroidAppsComponent } from 'src/app/pages/projects-page/android-apps/android-apps.component';
import { BunquerComponent } from 'src/app/pages/projects-page/bunquer/bunquer.component';
import { CustomRomsComponent } from 'src/app/pages/projects-page/custom-roms/custom-roms.component';
import { GithubProjectsComponent } from 'src/app/pages/projects-page/github-projects/github-projects.component';
import { In2artComponent } from 'src/app/pages/projects-page/in2art/in2art.component';
import { MadJumpgateComponent } from 'src/app/pages/projects-page/mad-jumpgate/mad-jumpgate.component';
import { TaskerComponent } from 'src/app/pages/projects-page/tasker/tasker.component';

import { AmazfitWatchfacesComponent } from 'src/app/pages/art-page/amazfit-watchfaces/amazfit-watchfaces.component';
import { IconsComponent } from 'src/app/pages/art-page/icons/icons.component';

import { NexxiaComponent } from 'src/app/pages/experience-page/2016-10-nexxia/nexxia.component';
import { TecnocomComponent } from 'src/app/pages/experience-page/2017-09-tecnocom/tecnocom.component';
import { MaticComponent } from 'src/app/pages/experience-page/2020-09-matic/matic.component';
import { In2artExperienceComponent } from 'src/app/pages/experience-page/2021-08-in2art/in2art-experience.component';
import { OrangeComponent } from 'src/app/pages/experience-page/2023-08-orange/orange.component';
import { EvoraComponent } from 'src/app/pages/experience-page/2023-11-evora/evora.component';
import { IndraComponent } from 'src/app/pages/experience-page/2024-06-indra/indra.component';



import { ComponentType } from '@angular/cdk/portal';
import { Skill as s, Skill } from 'src/app/data/skills.data';


export interface CaseStudy {
    url: string;
    component: ComponentType<any>;
    prioritat: number;
    skills: Skill[];
}

export type CaseStudyId = keyof typeof CASE_STUDIES;


export const CASE_STUDIES: Record<string, CaseStudy> = {

    // PROJECTES //
    in2art: {
        url: "/in2art",
        component: In2artComponent,
        prioritat: 139,
        skills: [s.ANGULAR, s.CSS, s.TYPESCRIPT, s.JAVASCRIPT, s.JQUERY, s.HTML5, s.BOOTSTRAP, s.ANGULARMATERIAL, s.I18N, s.NODEJS, s.JSON, s.MYSQL, s.FILEZILLA, s.APACHE, s.GIT, s.SOURCETREE, s.POWERSHELL, s.POSTMAN, s.ASANA, s.PHPMYADMIN, s.POEDIT, s.AGILE, s.MVC, s.RESPONSIVEDESIGN]
    },
    bunquer: {
        url: "/bunquer",
        component: BunquerComponent,
        prioritat: 130,
        skills: [s.ANGULAR, s.CSS, s.TYPESCRIPT, s.RXJS, s.BOOTSTRAP, s.HTML5, s.JSON, s.PLAYWRIGHT]
    },
    android: {
        url: "/android",
        component: AndroidAppsComponent,
        prioritat: 70,
        skills: [s.ANDROID, s.KOTLIN, s.JAVA, s.CSHARP, s.PHP, s.MYSQL, s.GITHUB, s.ANDROIDSTUDIO, s.UNITY]
    },
    mad_jumpgate: {
        url: "/mad-jumpgate",
        component: MadJumpgateComponent,
        prioritat: 50,
        skills: [s.CSHARP, s.UNITY, s.VISUALSTUDIO]
    },
    github: {
        url: "/github",
        component: GithubProjectsComponent,
        prioritat: 80,
        skills: [s.ANGULAR, s.CSS, s.JAVASCRIPT, s.JQUERY, s.NGRX, s.PHP]
    },
    custom_roms: {
        url: "/custom-roms",
        component: CustomRomsComponent,
        prioritat: 3,
        skills: []
    },
    tasker: {
        url: "/tasker",
        component: TaskerComponent,
        prioritat: 5,
        skills: [s.HTML5, s.CSS, s.JAVA, s.PHP]
    },
    icons: {
        url: "/icons",
        component: IconsComponent,
        prioritat: 2,
        skills: []
    },
    amazfit: {
        url: "/amazfit",
        component: AmazfitWatchfacesComponent,
        prioritat: 1,
        skills: []
    },

    // EXPERENCIA //
    indra: {
        url: "/indra",
        component: IndraComponent,
        prioritat: 150,
        skills: [s.ANGULAR, s.TYPESCRIPT, s.NGRX, s.RXJS, s.CSS, s.SCSS, s.HTML5, s.PRIMENG, s.JEST, s.JASMINE, s.JIRA, s.SONARQUBE, s.OPENSHIFT, s.GIT, s.BITBUCKET, s.RESPONSIVEDESIGN, s.CONTINUOUSINTEGRATION, s.AGILE, s.MVC]
    },
    in2art_exp: {
        url: "/in2art-exp",
        component: In2artExperienceComponent,
        prioritat: 140,
        skills: [s.ANGULAR, s.CSS, s.TYPESCRIPT, s.JAVASCRIPT, s.JQUERY, s.HTML5, s.BOOTSTRAP, s.ANGULARMATERIAL, s.I18N, s.NODEJS, s.JSON, s.MYSQL, s.FILEZILLA, s.APACHE, s.GIT, s.SOURCETREE, s.POWERSHELL, s.POSTMAN, s.ASANA, s.PHPMYADMIN, s.POEDIT, s.AGILE, s.MVC, s.RESPONSIVEDESIGN]
    },
    matic: {
        url: "/matic",
        component: MaticComponent,
        prioritat: 120,
        skills: [s.JAVASCRIPT, s.JQUERY, s.CSS, s.HTML5, s.BOOTSTRAP, s.MATERIALIZE, s.CORDOVA, s.ANDROID, s.UWP, s.SEQUELIZE, s.PHP, s.APACHE, s.MYSQL, s.PHPMYADMIN, s.FILEZILLA, s.POWERSHELL, s.WINDOWSSERVER, s.JOOMLA, s.AGILE, s.MVC, s.RESPONSIVEDESIGN, s.ANYDESK, s.REMOTEDESKTOP]
    },
    evora: {
        url: "/evora",
        component: EvoraComponent,
        prioritat: 110,
        skills: [s.ANGULAR, s.TYPESCRIPT, s.NGRX, s.RXJS, s.CSS, s.ANGULARMATERIAL, s.PWA, s.CORDOVA, s.GIT, s.JIRA, s.CONFLUENCE, s.CONTINUOUSINTEGRATION, s.AGILE, s.MVC]
    },
    orange: {
        url: "/orange",
        component: OrangeComponent,
        prioritat: 25,
        skills: [s.JAVA, s.ANGULAR, s.SQLDEVELOPER, s.WEBLOGIC, s.ECLIPSE, s.JIRA, s.CONFLUENCE, s.GITLAB, s.MAVEN, s.JFROGARTIFACTORY, s.TORTOISEGIT, s.WINSCP, s.WINDOWSSERVER, s.CONTINUOUSINTEGRATION, s.AGILE]
    },
    tecnocom: {
        url: "/tecnocom",
        component: TecnocomComponent,
        prioritat: 15,
        skills: [s.JAVA, s.JSP, s.PL1, s.DB2, s.MAVEN, s.NETBEANS, s.ECLIPSE, s.SVN, s.WINDOWSSERVER, s.TEAMVIEWER, s.REMOTEDESKTOP, s.ZOSMVS, s.CONTINUOUSINTEGRATION, s.AGILE]
    },
    nexxia: {
        url: "/nexxia",
        component: NexxiaComponent,
        prioritat: 20,
        skills: [s.JAVASCRIPT, s.JQUERY, s.CSS, s.HTML5, s.BOOTSTRAP, s.DELPHI, s.FASTREPORT, s.RESPONSIVEDESIGN]
    },


};
