import { Component, inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-icons',
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class IconsComponent {

    public m = inject(MainService);

}
