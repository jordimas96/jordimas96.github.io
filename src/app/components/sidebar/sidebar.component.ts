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
        this.open = true;
        // $(".content").css({ "transform": "translateX(200px)" });
    }
    tancar() {
        this.open = false;
        // $(".content").css({ "transform": "translateX(0)" });
    }
}
