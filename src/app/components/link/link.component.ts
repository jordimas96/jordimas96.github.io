import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Links } from './links';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    imports: []
})
export class LinkComponent implements OnChanges {

    @ViewChild('a') a: ElementRef;

    @Input() href: string;
    @Input() target: string = "_blank";
    @Input() id: string;

    @Input() class: string;

    public links = Links.links;

    public hrefCalculat;


    constructor(private m: MainService) { }
    
    ngOnChanges() {
        this.hrefCalculat = this.getHref();
    }

    getHref() {
        if (this.href)
            return this.href

        if (this.id) {
            let href = this.links[this.id];
            if (href) return href;

            href = this.links[this.id + "_" + this.m.idioma];
            if (href) return href;
            console.error("Missing link id:", this.id);
        }

        return null;
    }

    textWrap() {
        const numLletres = this.a?.nativeElement.innerText.length;

        if (!numLletres) return false;

        const limitLletres = this.m.esPantallaPc ? 40 : 15;

        return numLletres > limitLletres;
    }

};
