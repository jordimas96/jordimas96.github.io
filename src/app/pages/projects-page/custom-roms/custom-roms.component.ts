import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrls: ['./custom-roms.component.scss', '../projects-page.scss']
})
export class CustomRomsComponent {

    constructor(public m: MainService) { }

}
