import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
    template: '',
    styleUrl: './page.scss',
    standalone: false
})
export class PageComponent {

    constructor(public m: MainService, public route: ActivatedRoute) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Google Analytics //
        if (!localStorage.getItem("googleAnalyticsBlocked"))
            this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() { }

}
