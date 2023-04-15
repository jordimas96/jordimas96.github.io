import { Component } from '@angular/core';
import { Utils } from '../../services/utils.service';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    
    modeFosc: boolean = true;
    tema: string = "";
    idioma: string = "en";
    

    constructor(public m: MainService) {
        // m.footer = this;
    }
    ngOnInit() {
        
    }


}
