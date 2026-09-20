import { Component, inject, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { CaseStudyId } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

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

    public m = inject(MainService);

    @Input() id: CaseStudyId;

    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }

    getCostatGran(card: HTMLDivElement) {
        return Math.max(card.offsetWidth - 120, card.offsetHeight - 30);
    }
}
