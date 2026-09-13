import { Component, inject, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';


@Component({
    selector: 'jmp-story',
    templateUrl: './story.component.html',
    styleUrl: './story.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class StoryComponent {

    public m = inject(MainService);
    public ls = inject(LayoutService);

    @Input("titol") titol = "";
    @Input("urlId") urlId = "";
    @Input("img") img = "";

    url = "";

    async click() {
        let url = "https://www.instagram.com/stories/highlights/" + this.urlId;
        window.open(url, "_blank");
    }

}
