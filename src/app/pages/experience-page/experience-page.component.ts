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
        Utils.fadeIn(".content .ocult-animacio:nth-child(1)", 0);
        Utils.fadeIn(".content .ocult-animacio:nth-child(2)", 25);
        Utils.fadeIn(".content .ocult-animacio:nth-child(3)", 50);
    }

}
