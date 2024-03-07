import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
    template: '',
    styleUrls: ['./page.scss']
})
export class PageComponent {
    
    constructor(public m: MainService, public route: ActivatedRoute) { m.llegirParams(this.route); }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
    }

    afterRootFadeIn() { }

}
