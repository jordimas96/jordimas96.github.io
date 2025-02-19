import { Component } from '@angular/core';
import $ from 'jquery';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-detalls-android-apps',
    templateUrl: './detalls-android-apps.component.html',
    styleUrl: './detalls-android-apps.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent
    ]
})
export class DetallsAndroidAppsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Deshabilitar control dels videos des de les tecles multimedia del teclat //
        navigator.mediaSession.setActionHandler('play', function() { });
        navigator.mediaSession.setActionHandler('pause', function() { });
    }


    afterRootFadeIn() { }



    getAmazonLink_breakingBall() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/JMasDev-Breaking-Ball/dp/B0D1KXQR85`;
    }
    getAmazonLink_wallpaperBlurrer() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/JMasDev-Wallpaper-Blurrer/dp/B0CYHC4TT6`;
    }
    getAmazonLink_textMimicker() {
        const com = this.m.en ? "com" : "es";
        return `https://www.amazon.${com}/JMasDev-Text-Mimicker/dp/B0CXQFNMS5`;
    }


    toggleSeccio(boto) {
        let $seccio = $(boto).parent();
        let $contingut = $seccio.find(".contingut");
        let obert = $seccio.is("[data-open]");
        let $video = $seccio.find("video");

        obert = !obert;
        if (obert) {
            $seccio.attr("data-open", "");
            $contingut.stop().slideDown(200);
            $video[0].play();
        } else {
            $seccio.removeAttr("data-open");
            $contingut.stop().slideUp(200);
            $video[0].pause();
        }
    }
}
