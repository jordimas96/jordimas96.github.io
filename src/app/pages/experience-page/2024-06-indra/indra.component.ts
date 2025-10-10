import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-indra',
    templateUrl: './indra.component.html',
    styleUrl: './indra.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
    ]
})
export class IndraComponent {
    Skills = Skills;

    public links = {
        ca: "https://www.indracompany.com/es/",
        es: "https://www.indracompany.com/es/",
        en: "https://www.indracompany.com/en/",
    }

    constructor(
        public m: MainService,
        public ts: ThemeService
    ) { }

    getLink() {
        return this.links[this.m.idioma];
    }

    getLinkDintelHome() {
        return [
            "https://dintel.redsara.es/",
            "https://dintel.redsara.es/",
            "https://dintel.redsara.es/content/dintel/en/inicio.html",
        ][this.m.idiomaIndex];
    }
    getLinkDintelComponents() {
        return [
            "https://dintel.redsara.es/componentes",
            "https://dintel.redsara.es/componentes",
            "https://dintel.redsara.es/content/dintel/en/componentes.html",
        ][this.m.idiomaIndex];
    }

    goToDintel(event) {
        event.preventDefault();

        let $crisis = $(".accordion > .crisis");
        let $dintel = $(".accordion > .dintel");

        $crisis.removeAttr("data-open");
        $crisis.find(".contingut").stop().hide();

        $dintel.attr("data-open", "");
        $dintel.find(".contingut").stop().show();

        this.m.scrollTo($dintel[0]);
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
