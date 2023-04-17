import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

    public mostrarWidgetJoc = false;

    constructor(public m: MainService) { }

    ngOnInit() {
        setTimeout(() => { this.afterFadeIn(); }, $("app-root").is(":visible") ? 0 : this.m.tempsDelayCarregaPag); // Retard fadein pagina //
    }

    afterFadeIn() {
        this.mostrarWidgetJoc = true;
        setTimeout(() => {
            $(".game").css("transform","scaleY(1)");
        }, 400);
    }
}
