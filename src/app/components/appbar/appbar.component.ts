import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { SelectorIdiomaComponent } from 'src/app/components/selector-idioma/selector-idioma.component';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { NavegacioTabComponent } from './navegacio-tab/navegacio-tab.component';


@Component({
    selector: 'jmp-appbar',
    templateUrl: './appbar.component.html',
    styleUrl: './appbar.component.scss',
    imports: [
        ...SharedImports,
        NavegacioTabComponent,
        SelectorIdiomaComponent,
    ]
})
export class AppbarComponent implements AfterViewInit {

    public m = inject(MainService);
    public ts = inject(ThemeService);
    public ls = inject(LayoutService);

    @ViewChild('appbar') appbar: ElementRef;

    constructor() { this.m.appbar = this; }

    ngAfterViewInit() {
        this.ls.appbar = this.appbar.nativeElement;
    }

    width() {
        return this.appbar.nativeElement.offsetWidth || 0;
    }
    height() {
        return this.appbar.nativeElement.offsetHeight || 0;
    }


    // Funcions //
    @HostListener('window:scroll')
    onScroll() {
        this.m.scroll = window.scrollY;
        if (this.m.scroll > 0)
            document.body.classList.add("scrolled");
        else
            document.body.classList.remove("scrolled");
    }
}
