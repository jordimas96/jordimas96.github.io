import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-matic',
    templateUrl: './matic.component.html',
    styleUrl: './matic.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class MaticComponent {
    Skills = Skills;

    public links = {
        ca: "https://www.matic.cat/",
        es: "https://www.matic.cat/es/inicio/",
        en: "https://www.matic.cat/es/inicio/",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

    getLink1() {
        return [
            "assets/documents/matic/smart-counting-cat.pdf",
            "assets/documents/matic/smart-counting-esp.pdf",
            "assets/documents/matic/smart-counting-esp.pdf",
        ][this.m.idiomaIndex];
    }
    getLink2() {
        return "assets/documents/matic/captura-mobil.jpg";
    }


    // Acordeó //
    toggleSeccio(boto) {
        let $seccio = $(boto).parent();
        let obert = $seccio.is("[data-open]");

        // Obrir o tancar aquesta secció //
        obert = !obert;
        if (obert) {
            $seccio.attr("data-open", "");
            $seccio.find(".contingut").stop().slideDown(200);
            $seccio.find("video")[0]?.play();
        } else {
            $seccio.removeAttr("data-open");
            $seccio.find(".contingut").stop().slideUp(200);
            $seccio.find("video")[0]?.pause();
        }
        
        // Tancar altres seccions //
        $seccio.siblings().each(function () {
            $(this).removeAttr("data-open");
            $(this).find(".contingut").stop().slideUp(200);
            $(this).find("video")[0]?.pause();
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
