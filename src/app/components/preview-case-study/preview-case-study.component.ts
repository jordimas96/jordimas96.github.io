import { Component, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-preview-case-study',
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

    constructor(public m: MainService) { }


    get seeMore() {
        return ["Veure més", "Ver más", "See more"][this.m.idiomaIndex];
    }
}
