import { Component, inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'jmp-about-card',
    templateUrl: './about-card.component.html',
    styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {

    public m = inject(MainService);

}
