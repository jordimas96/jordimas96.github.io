import { Component } from '@angular/core';
import { LinkComponent } from 'src/app/components/link/link.component';
import { MostrarAmbAnimacioDirective } from "src/app/directives/mostrar-amb-animacio.directive";
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'jmp-funcionalitats',
    templateUrl: './funcionalitats.component.html',
    styleUrl: './funcionalitats.component.scss',
    imports: [LinkComponent, MostrarAmbAnimacioDirective]
})
export class FuncionalitatsComponent {
    
    constructor(public m: MainService) { }

    public get linkReadme() {
        return `https://github.com/jordimas96/jordimas96.github.io/blob/main/src/assets/_experience/in2art/feature-sheets/in2art-feature-sheet.${this.m.idioma}.md`;
    }
}
