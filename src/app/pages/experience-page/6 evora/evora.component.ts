import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-evora',
    templateUrl: './evora.component.html',
    styleUrls: ['./evora.component.scss', '../experience-page.scss']
})
export class EvoraComponent {
    Skills = Skills;
    
    public links = {
        ca: "https://www.evorait.com/",
        es: "https://www.evorait.com/",
        en: "https://www.evorait.com/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
