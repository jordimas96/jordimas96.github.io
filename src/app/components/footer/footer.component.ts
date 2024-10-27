import { Component, ElementRef } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { MainService } from 'src/app/services/main.service';
import { RickrollService } from 'src/app/services/rickroll.service';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true,
    imports: [
        TargetBlankDirective,
        MostrarAmbAnimacioDirective,
    ]
})
export class FooterComponent {

    public colorFirma = Math.floor(Math.random() * 360);
    public bateria = 100;
    public carregant = true;

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
        public rr: RickrollService
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
