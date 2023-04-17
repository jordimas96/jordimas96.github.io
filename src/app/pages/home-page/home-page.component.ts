import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    constructor(public m: MainService) { }

    ngOnInit() {
        setTimeout(() => { this.afterFadeIn(); }, $("app-root").is(":visible") ? 0 : this.m.tempsDelayCarregaPag); // Retard fadein pagina //
    }

    afterFadeIn() {
        $("app-imatge-scroll").fadeIn(300);
    }
}
