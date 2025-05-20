import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-about-card',
    templateUrl: './about-card.component.html',
    styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
    constructor(public m: MainService) { }
}
