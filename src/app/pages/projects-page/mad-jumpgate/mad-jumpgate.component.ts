import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrls: ['./mad-jumpgate.component.scss', '../projects-page.scss']
})
export class MadJumpgateComponent {

    constructor(public m: MainService) { }
    
}
