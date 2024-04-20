import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    public open = false;

    public width = window.innerWidth;

    constructor(public m: MainService) {
        m.sidebar = this;
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

    }

    afterRootFadeIn() {

    }


    obrir() {
        // Get the middle point of scroll, for the transform-origin of the .content element //
        const scroll = (document.documentElement.scrollTop + document.documentElement.clientHeight / 2) / document.documentElement.scrollHeight * 100;

        this.open = true;
        $(".content").css({"transform-origin":`100% ${scroll}%`, "transform": "scale(0.95)" });
    }
    tancar() {
        this.open = false;
        $(".content").css({ "transform": "scale(1)" });
    }
}
