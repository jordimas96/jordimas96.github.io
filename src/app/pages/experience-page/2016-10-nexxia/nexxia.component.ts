import { AfterViewInit, Component, ElementRef, HostListener, inject, Input, ViewChild } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-nexxia',
    templateUrl: './nexxia.component.html',
    styleUrl: './nexxia.component.scss',
    imports: [
        ...SharedImports,
        LlistaSkills,
    ]
})
export class NexxiaComponent implements AfterViewInit {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    @ViewChild("cartaRecomanacio") cartaRecomanacio: ElementRef<HTMLAnchorElement>;
    public translateFons = 0;

    ngAfterViewInit() {
        setTimeout(() => this.onScroll(), 600);
    }

    get linkTitol() {
        return [
            "https://www.nexxiasoft.com/?lang=ca",
            "https://www.nexxiasoft.com/?lang=es",
            "https://www.nexxiasoft.com/?lang=es",
        ][this.m.idiomaIndex];
    }


    @HostListener('window:scroll')
    onScroll() {
        const el = this.cartaRecomanacio.nativeElement;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
    
        const progress = (vh - r.top) / (vh + r.height);
        const p = Math.max(0, Math.min(1, progress));
    
        const factor = r.height * 2;
    
        this.translateFons = (p - 0.75) * factor;
    }

}
