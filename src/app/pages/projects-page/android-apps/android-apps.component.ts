import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { DetallsAndroidAppsComponent } from './detalls-android-apps/detalls-android-apps.component';

@Component({
    selector: 'jmp-android-apps',
    templateUrl: './android-apps.component.html',
    styleUrl: './android-apps.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        DetallsAndroidAppsComponent,
        QRCodeComponent,
        StoryComponent,
        LlistaSkills,
    ]
})
export class AndroidAppsComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    getAmazonLink_apps() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/s?rh=p_4%3AJMasDev`;
    }

}
