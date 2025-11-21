import { AfterViewInit, ElementRef, Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

// https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/ //

@Injectable({
    providedIn: 'root'
})
export class LayoutService implements OnInit, AfterViewInit {
    // Components //
    public appbar: HTMLElement;
    public sidebar: HTMLElement;
    public footer: HTMLElement;
    public index: HTMLElement;

    public paddingLeftPagina: number = 0;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) {
        
    }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        
    }



    public get alturaAppbar() {
        return this.appbar?.offsetHeight || 0;
    }
    
    public get ampladaScrollbar() {
        return window.innerWidth - (this.appbar?.offsetWidth || 0);
    }

}
