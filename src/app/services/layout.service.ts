import { AfterViewInit, ElementRef, inject, Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

// https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/ //

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    
    public router = inject(Router);
    public route = inject(ActivatedRoute);

    // Components //
    public appbar: HTMLElement;
    public sidebar: HTMLElement;
    public footer: HTMLElement;
    public index: HTMLElement;

    public paddingLeftPagina: number = 0;
    

    public get alturaAppbar() {
        return this.appbar?.offsetHeight || 0;
    }
    
    public get ampladaScrollbar() {
        return window.innerWidth - (this.appbar?.offsetWidth || 0);
    }

}
