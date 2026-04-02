import { Component, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { SECCIONS } from 'src/app/shared/seccions';

@Component({
    selector: 'jmp-preview-case-study',
    templateUrl: './preview-case-study.component.html',
    styleUrl: './preview-case-study.component.scss',
    imports: [
        RouterLink,
        ...SharedImports,
        MatRipple,
    ]
})
export class PreviewCaseStudyComponent {

    @Input() nom: string;
    @Input() pagina: string;

    constructor(public m: MainService) { }

    ngOnInit() {
        // Si no tenim pàgina, l'intentem deduir //
        if (!this.pagina) {
            let seccioProbable = SECCIONS.find(s => s.nom == this.nom);
            if (seccioProbable)
                this.pagina = seccioProbable.pagina;
        }
    }


    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }

    getCostatGran(card: HTMLDivElement) {
        return Math.max(card.offsetWidth - 120, card.offsetHeight - 30);
    }
}
