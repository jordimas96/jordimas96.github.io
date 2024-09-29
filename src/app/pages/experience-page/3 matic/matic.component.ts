import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-matic',
    templateUrl: './matic.component.html',
    styleUrls: ['./matic.component.scss', '../experience-page.scss']
})
export class MaticComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.matic.cat/",
        es: "https://www.matic.cat/es/inicio/",
        en: "https://www.matic.cat/es/inicio/",
    };

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
