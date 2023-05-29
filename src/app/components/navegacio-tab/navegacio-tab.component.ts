import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { interval } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-navegacio-tab',
    templateUrl: './navegacio-tab.component.html',
    styleUrls: ['./navegacio-tab.component.scss']
})
export class NavegacioTabComponent {

    @ViewChild("pill") pill: ElementRef;

    botoSeleccionat;

    public rect: any;

    movent = false;

    constructor(public m: MainService,
        private elementRef: ElementRef,
        private router: Router
    ) {

    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
        
        // Event al canviar la url //
        this.router.events.subscribe(event => {
            setTimeout(() => {
                
                if (event instanceof NavigationEnd) {
                    this.botoSeleccionat = document.querySelector("button.selected");
                    this.actPosPill(true);
                }
            }, 0);
        });
    }

    afterRootFadeIn() {
        this.actPosPill(false);

        interval(50).subscribe(() => {
            if (!this.movent)
                this.actPosPill(false);
        });
    }

    onClick(target) {
        this.botoSeleccionat = target;
        this.m.u.scroll(0);

        // this.actPosPill(true);
    }

    actPosPill(animacio) {
        if (!this.botoSeleccionat) this.botoSeleccionat = document.querySelector("button.selected");
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
