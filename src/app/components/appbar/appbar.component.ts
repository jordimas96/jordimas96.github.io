import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { MarcadorPaginaActual } from 'src/app/components/appbar/marcador-pagina-actual/marcador-pagina-actual';
import { InputBuscador } from 'src/app/components/input-buscador/input-buscador';
import { SelectorIdiomaComponent } from 'src/app/components/selector-idioma/selector-idioma.component';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';


@Component({
    selector: 'jmp-appbar',
    templateUrl: './appbar.component.html',
    styleUrl: './appbar.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        MarcadorPaginaActual,
        InputBuscador,
        SelectorIdiomaComponent,
    ]
})
export class AppbarComponent implements AfterViewInit {

    public m = inject(MainService);
    public ts = inject(ThemeService);
    public ls = inject(LayoutService);

    @ViewChild('appbar') appbar: ElementRef;

    public buscadorObert = false;

    constructor() { this.m.appbar = this; }

    ngAfterViewInit() {
        this.ls.appbar = this.appbar.nativeElement;
        
        this.buscadorObert = Utils.getFlag("buscadorObert");
    }

    width() {
        return this.appbar.nativeElement.offsetWidth || 0;
    }
    height() {
        return this.appbar.nativeElement.offsetHeight || 0;
    }


    toggleBuscador() {
        this.buscadorObert = !this.buscadorObert;

        Utils.setFlag("buscadorObert", this.buscadorObert);
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
