import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
    }

    afterRootFadeIn() {
        Utils.fadeIn($(".content .ocult-animacio").eq(0), 0);
        Utils.fadeIn($(".content .ocult-animacio").eq(1), 25);
        Utils.fadeIn($(".content .ocult-animacio").eq(2), 50);
        Utils.fadeIn($(".content .ocult-animacio").eq(3), 75);
    }

}
