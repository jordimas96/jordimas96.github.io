import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    templateUrl: './card.component.html',
})
export class CardComponent {

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
    ) { }

    async ngOnInit() {
        
    }


    async ngAfterViewInit() {
        
        await Utils.wait(50);

        // TODO per que mostra skills?? al carregar es mostren un moment, per algun motiu

        // Mostrar card //
        $(this.rootElement.nativeElement).find(".group").addClass("mostrat");
        

        // Mostrar skills //
        $(this.rootElement.nativeElement).find("app-skill .chip").each((i, e) => {
            Utils.fadeIn(e, i * 20 + 200);
        });
    }

}
