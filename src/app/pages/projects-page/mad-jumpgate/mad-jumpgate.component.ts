import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrls: ['./mad-jumpgate.component.scss', '../projects-page.scss', '../../../components/card/card.scss']
})
export class MadJumpgateComponent extends CardComponent {

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }
    
}
