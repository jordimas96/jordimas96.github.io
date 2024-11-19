import { Links } from './links';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    standalone: true,
    imports: []
})
export class LinkComponent {

    @ViewChild('a') a: ElementRef;

    @Input() href: string;
    @Input() target: string = "_blank";
    @Input() id: string;

    @Input() class: string;

    public links = Links.links;


    constructor(private m: MainService) { }

    textWrap() {
        const numLletres = this.a?.nativeElement.innerText.length;

        if (!numLletres) return false;

        const limitLletres = this.m.esPantallaPc() ? 40 : 15;

        return numLletres > limitLletres;
    }

};
