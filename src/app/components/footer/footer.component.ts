import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    public colorFirma = Math.floor(Math.random() * 360);
    public bateria = 100;
    public carregant = true;
    

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
    ) {
        m.footer = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Fill battery info //
        try {
            (navigator as any).getBattery().then(bateria => {
                this.bateria = bateria.level * 100;
                this.carregant = bateria.charging;
            })
        } catch (e) { }
    }

    afterRootFadeIn() { }

}
