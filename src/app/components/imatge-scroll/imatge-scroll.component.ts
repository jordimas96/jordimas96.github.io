import { Component, HostListener, inject, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'jmp-imatge-scroll',
    templateUrl: './imatge-scroll.component.html',
    styleUrl: './imatge-scroll.component.scss',
    standalone: true
})
export class ImatgeScrollComponent {

    public m = inject(MainService);

    @Input() src: string;
    public transY;

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.transY = -((window.pageYOffset / (this.m.esPantallaMobil ? 100 : 200)) * 13 - 6.5);
        this.transY = Utils.numberInRange(this.transY, -6.5, 6.5);
    }

}
