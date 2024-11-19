import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { RickrollService } from 'src/app/services/rickroll.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class FooterComponent implements OnInit, AfterViewInit{

    @ViewChild("footer") footerRef: ElementRef;

    public colorFirma = Math.floor(Math.random() * 360);
    public bateria = 100;
    public carregant = true;

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
        public rr: RickrollService,
        public ls: LayoutService,
    ) {
        m.footer = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Fill battery info //
        try {
            (navigator as any).getBattery().then(bateria => {
                this.bateria = bateria.level * 100;
                this.carregant = bateria.charging;
            })
        } catch (e) { }
    }

    ngAfterViewInit() {
        this.ls.footer = this.footerRef.nativeElement;
    }

    afterRootFadeIn() { }

}
