import { Component, HostListener, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-imatge-scroll',
    templateUrl: './imatge-scroll.component.html',
    styleUrls: ['./imatge-scroll.component.scss']
})
export class ImatgeScrollComponent {

    @Input() src: string;
    public transY;

    constructor(public m: MainService) { }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.transY = -((window.pageYOffset / (this.m.esPantallaMobil() ? 100 : 200)) * 13 - 6.5);
        this.transY = Utils.numberInRange(this.transY, -6.5, 6.5);
    }
  
}
