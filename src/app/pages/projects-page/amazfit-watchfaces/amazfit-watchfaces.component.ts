import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-amazfit-watchfaces',
    templateUrl: './amazfit-watchfaces.component.html',
    styleUrls: ['./amazfit-watchfaces.component.scss', '../projects-page.scss']
})
export class AmazfitWatchfacesComponent extends CardComponent {

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }
    
}
