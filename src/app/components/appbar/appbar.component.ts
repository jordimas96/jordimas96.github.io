import { Component, HostListener } from '@angular/core';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';
import { Utils } from '../../shared/utils';


@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {

    public width = window.innerWidth;

    constructor(public m: MainService) {
        m.appbar = this;
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Delay inicial pagina root //
        setTimeout(() => { $("app-root").fadeIn(300); }, this.m.tempsDelayCarregaPag);
    }

    afterRootFadeIn() {
        // $("body").css({ "transition": "background-position 0.3s" });
    }


    // Funcions //
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.width = event.target.innerWidth;
    }
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.m.scroll = window.pageYOffset;
    }
}
