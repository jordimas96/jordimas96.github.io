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
        let obert = $seccio.is("[data-open]");

        // Obrir o tancar aquesta secció //
        obert = !obert;
        if (obert) {
            $seccio.attr("data-open", "");
            $seccio.find(".contingut").stop().slideDown(200);
            $seccio.find("video")[0].play();
        } else {
            $seccio.removeAttr("data-open");
            $seccio.find(".contingut").stop().slideUp(200);
            $seccio.find("video")[0].pause();
        }
        
        // Tancar altres seccions //
        $seccio.siblings().each(function () {
            $(this).removeAttr("data-open");
            $(this).find(".contingut").stop().slideUp(200);
            $(this).find("video")[0].pause();
        });

        
        if (obert) {
            // Scroll a la secció clicada //
            let offset = this.m.appbar.height() + this.m.index.height();
            let nouScroll = $seccio.parent().offset()!.top - offset;

            // Altura botó //
            nouScroll += $seccio.index() * ($seccio.find(".boto-desplegable").outerHeight()! + 0.2 * 16);
            let behavior: ScrollBehavior = "smooth";
            if (!obert && nouScroll < window.scrollY)
                behavior = "instant";

            window.scrollTo({ top: nouScroll, behavior });
        }
        
    }
}
