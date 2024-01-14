import { Component, ElementRef } from '@angular/core';
import { Utils } from '../../services/utils.service';
import { MainService } from './../../services/main.service';


@Component({
    template: '',
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

        // Mostrar card //
        $(this.rootElement.nativeElement).find(".group").addClass("mostrat");

        // Mostrar skills //
        // $(rootElement).find("app-skill .chip").each((i, e) => {
        //     Utils.fadeIn(e, i * 20 + 200);
        // });
    }

}
