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
        $(".content>.ocult-animacio").each((i, e) => {
            Utils.fadeIn(e, i * 50);
        });
        $("app-skill").each((i, e) => {
            Utils.fadeIn(e, i * 20);
        });
        


        this.mostrarWidgetJoc = true;
        setTimeout(() => {
            // Mostrar amb fadein el widget quan s'hagi carregat //
            this.game.nativeElement.addEventListener('load', () => {
                $(".game").css("opacity","1");
            });
        }, 0);
    }


}
