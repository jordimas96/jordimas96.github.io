import { Component, ElementRef, HostListener } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    template: '',
})
export class CardComponent {

    public mostrat = false;
    
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
        // $(this.rootElement.nativeElement).find(".group").addClass("mostrat");
        

        // Mostrar skills //
        $(this.rootElement.nativeElement).find("app-skill .chip").each((i, e) => {
            Utils.fadeIn(e, i * 20 + 200);
        });

        this.onViewportScroll();
    }

    @HostListener('document:scroll', ['$event'])
    public async onViewportScroll() {
        const rootElementRect = this.rootElement.nativeElement.getBoundingClientRect();
        const bottom = rootElementRect.bottom;
        const top = rootElementRect.top;

        await Utils.wait(50);

        this.mostrat = bottom >= 0 && top <= window.innerHeight;
    }

}
