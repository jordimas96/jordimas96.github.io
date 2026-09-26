import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-matic',
    templateUrl: './matic.component.html',
    styleUrl: './matic.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class MaticComponent {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get linkTitol() {
        return [
            "https://www.matic.cat/",
            "https://www.matic.cat/es/inicio/",
            "https://www.matic.cat/es/inicio/",
        ][this.m.idiomaIndex];
    }

    get linkSmartCountingPDF() {
        return [
            "assets/_experience/matic/documents/smart-counting-cat.pdf",
            "assets/_experience/matic/documents/smart-counting-esp.pdf",
            "assets/_experience/matic/documents/smart-counting-esp.pdf",
        ][this.m.idiomaIndex];
    }
    get link2() {
        return "assets/_experience/matic/systemblock/systemblock-captura-mobil.jpg";
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
            let offset = this.m.appbar.height() + this.m.index.height() + 16;
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
