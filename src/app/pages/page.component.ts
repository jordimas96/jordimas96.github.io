import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    template: '',
    styleUrl: './page.scss',
    standalone: false
})
export class PageComponent {

    constructor(public m: MainService) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Google Analytics //
        if (!Utils.getFlag("googleAnalyticsBlocked"))
            this.m.gas.pageView(window.location.pathname);
    }
    afterRootFadeIn() { }


}
