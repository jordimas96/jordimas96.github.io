import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { DetallsAndroidAppsComponent } from './detalls-android-apps/detalls-android-apps.component';

@Component({
    selector: 'app-android-apps',
    templateUrl: './android-apps.component.html',
    styleUrl: './android-apps.component.scss',
    imports: [
        ...SharedImports,
        DetallsAndroidAppsComponent,
        QRCodeComponent,
        SkillComponent,
        StoryComponent,
    ]
})
export class AndroidAppsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }


    getAmazonLink_apps() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/s?rh=p_4%3AJMasDev`;
    }

}
