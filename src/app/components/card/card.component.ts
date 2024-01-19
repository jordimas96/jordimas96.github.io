import { Component, ElementRef, HostListener } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

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
