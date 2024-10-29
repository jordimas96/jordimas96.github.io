import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as $ from "jquery";
import { SelectorIdiomaComponent } from 'src/app/components/sidebar/selector-idioma/selector-idioma.component';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { NavegacioTabComponent } from './navegacio-tab/navegacio-tab.component';


@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrl: './appbar.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
        NavegacioTabComponent,
        SelectorIdiomaComponent,
    ]
})
export class AppbarComponent {

    @ViewChild('appbar') appbar: ElementRef;

    constructor(
        public m: MainService,
        public ts: ThemeService
    ) {
        m.appbar = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Delay inicial pagina root //
        setTimeout(() => { $("app-root").fadeIn(300); }, this.m.tempsDelayCarregaPag);
    }

    afterRootFadeIn() {
        document.body.addEventListener("mouseleave", () => {
            this.m.sidebar.tancar()
        });
    }

    width() {
        return this.appbar.nativeElement.offsetWidth || 0;
    }
    height() {
        return this.appbar.nativeElement.offsetHeight || 0;
    }


    // Funcions //
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.m.scroll = window.scrollY;
        if (this.m.scroll > 0)
            document.body.classList.add("scrolled");
        else
            document.body.classList.remove("scrolled");
    }
}
