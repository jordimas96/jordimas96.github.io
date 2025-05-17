import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { Utils } from 'src/app/shared/utils';


@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrl: './story.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class StoryComponent implements OnInit {

    @Input("titol") titol = "";
    @Input("urlId") urlId = "";
    @Input("img") img = "";

    url = "";
        
    constructor(
        public m: MainService,
        public ls: LayoutService,
    ) { }
    
    ngOnInit() { }


    async click() {
        let url = "https://www.instagram.com/stories/highlights/" + this.urlId;
        window.open(url, "_blank");
    }

}
