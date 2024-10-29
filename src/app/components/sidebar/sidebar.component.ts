import { Component } from '@angular/core';
import { NavigationEnd, RouterLink } from '@angular/router';
import { BlockGoogleAnalyticsService } from 'src/app/services/blockGoogleAnalytics.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { IconesContacteComponent } from '../icones-contacte/icones-contacte.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { SelectorIdiomaComponent } from './selector-idioma/selector-idioma.component';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    standalone: true,
    imports: [
        RouterLink,
        ...SharedImports,
        IconesContacteComponent,
        DarkModeComponent,
        SelectorIdiomaComponent,
    ]
})
export class SidebarComponent {

    public open = false;

    public width = window.innerWidth;

    constructor(
        public m: MainService,
        public blockGoogleAnalyticsService: BlockGoogleAnalyticsService
    ) {
        m.sidebar = this;
    }
    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        this.m.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.m.u.scroll(0);
                this.open = false;
            }
        });
    }

    afterRootFadeIn() {

    }


    obrir() {
        // Get the middle point of scroll, for the transform-origin of the .page element //
        const scroll = (document.documentElement.scrollTop + document.documentElement.clientHeight / 2) / document.documentElement.scrollHeight * 100;

        this.open = true;
        $("#page, .index-mobil, .index-pc").css({ "transform-origin": `100% ${scroll}%`, "transform": "scale(0.95)" });
    }
    tancar() {
        this.open = false;
        $("#page, .index-mobil, .index-pc").css({ "transform": "" });
    }



}
