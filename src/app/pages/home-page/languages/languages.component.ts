import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends CardComponent {

    public showTime = false;

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);

        this.showTime = Utils.getCookie("showTime") == "1";
    }
    override async ngOnInit() {
        super.ngOnInit();
    }


    showExpTime_click() {
        this.showTime = !this.showTime;

        Utils.setCookieDays("showTime", this.showTime ? 1 : 0);
    }

    obrirVeureMesSkills() {
        $("#divBotoVeureMes").slideUp();
        $(".skills-ocultes").slideDown();
    }
    
}
