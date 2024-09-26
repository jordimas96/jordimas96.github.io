import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss', '../art-page.scss']
})
export class IconsComponent {

    constructor(public m: MainService) { }
    
}
