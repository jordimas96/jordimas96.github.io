import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Utils } from '../shared/utils';

@Component({
    template: '',
    styleUrls: ['./page.scss']
})
export class PageComponent {
    
    constructor(public m: MainService, public route: ActivatedRoute) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
        
        // Google Analytics //
        if (!this.m.debug) this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() { }

    scrollTo(id) {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({ top: element.offsetTop - (Utils.getAlturaAppbar() + 40) });
        }
    }

}
