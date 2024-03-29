import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    template: '',
})
export class CardComponent {
    
    constructor(
        public m: MainService,
        public rootElement: ElementRef,
    ) { }

    ngOnInit() { }
    ngAfterViewInit() { }

}
