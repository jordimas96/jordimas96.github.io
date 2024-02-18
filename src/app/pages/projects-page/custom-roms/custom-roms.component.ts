import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrls: ['./custom-roms.component.scss', '../projects-page.scss', '../../../components/card/card.scss']
})
export class CustomRomsComponent extends CardComponent {

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }
    
}
