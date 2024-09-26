import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-amazfit-watchfaces',
    templateUrl: './amazfit-watchfaces.component.html',
    styleUrls: ['./amazfit-watchfaces.component.scss', '../art-page.scss']
})
export class AmazfitWatchfacesComponent {

    constructor(public m: MainService) { }
    
}
