import { Component, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

    @ViewChild('game') game;
    public mostrarWidgetJoc = false;

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));
        
    }

    afterRootFadeIn() {
        Utils.fadeIn(".content .ocult-animacio:nth-child(1)", 0);
        Utils.fadeIn(".content .ocult-animacio:nth-child(2)", 25);
        Utils.fadeIn(".content .ocult-animacio:nth-child(3)", 50);
        Utils.fadeIn(".content .ocult-animacio:nth-child(4)", 75);


        this.mostrarWidgetJoc = true;
        setTimeout(() => {
            // Mostrar amb fadein el widget quan s'hagi carregat //
            this.game.nativeElement.addEventListener('load', () => {
                $(".game").css("opacity","1");
            });
        }, 0);
    }


}
