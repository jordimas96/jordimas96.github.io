import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { interval } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-navegacio-tab',
    templateUrl: './navegacio-tab.component.html',
    styleUrl: './navegacio-tab.component.scss',
    imports: [
        RouterLinkActive,
        RouterLink,
        ...SharedImports,
    ]
})
export class NavegacioTabComponent {

    @ViewChild("pill") pill: ElementRef;

    public botoSeleccionat: Element | null;

    public rect: any;

    public movent = false;

    constructor(
        public m: MainService,
        private router: Router,
        private elementRef: ElementRef
    ) {
        this.router.events.subscribe(async event => {
            if (event instanceof NavigationEnd) {
                // When screen changed //
                await Utils.wait(0);
                this.botoSeleccionat = document.querySelector("app-navegacio-tab nav button.selected");
                Utils.scroll(0);

                this.actPosPill(true);
            }
        });
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() {
        this.actPosPill(false);

        interval(50).subscribe(() => {
            if (!this.movent)
                this.actPosPill(false);
        });
    }

    actPosPill(animacio) {
        if (!this.botoSeleccionat) this.botoSeleccionat = document.querySelector("app-navegacio-tab nav button.selected");
        if (!this.botoSeleccionat) {
            $(this.pill.nativeElement).css({ top: 0, left: 0, width: 0, height: 0 });
            return;
        }

        let rect = this.botoSeleccionat.getBoundingClientRect();
        let rectComp = this.elementRef.nativeElement.getBoundingClientRect();

        let canvis = {
            top: rect.top-rectComp.top,
            left: rect.left-rectComp.left,
            width: rect.width,
            height: rect.height,
        };
        if (animacio) {
            this.movent = true;
            $(this.pill.nativeElement).animate(canvis, 300, () => { this.movent = false; });
        }
        else
            $(this.pill.nativeElement).css(canvis);

    }

    // Funcions //
    @HostListener('window:resize', ['$event'])
    @HostListener('window:scroll', ['$event'])
    onResize() {
        this.actPosPill(false);
    }

}
