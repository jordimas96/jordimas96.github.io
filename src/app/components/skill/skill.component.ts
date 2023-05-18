import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    @Input("n") nom: string;

    nomAClasse(s) {
        return s
            .normalize()
            .toLowerCase()
            .replaceAll("#", "sharp")
            .replaceAll("/", "")
            .replaceAll(" ", "")
    }
    buscarGoogle(s) {
        s = s
            .replaceAll(" ", "+")
            .replaceAll("#", "sharp");
        
        s = `https://www.google.com/search?btnI&q=${s}`;
        window.open(s, "_blank");
    }
}
