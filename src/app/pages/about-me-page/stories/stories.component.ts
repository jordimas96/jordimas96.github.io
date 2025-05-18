import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { StoryComponent } from './story/story.component';


@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrl: './stories.component.scss',
    imports: [
        ...SharedImports,
        StoryComponent,
    ]
})
export class StoriesComponent implements OnInit {

    @ViewChild('stories') storiesRef: ElementRef;

    prefixUrl = "assets/images/about-me/stories/";

    constructor(
        public m: MainService,
        public ls: LayoutService,
    ) { }
    async ngOnInit() { }

    public scrollOnHover(event: MouseEvent) {
        if (this.m.esPantallaTactil()) return;

        let s = this.storiesRef.nativeElement;
        let pos = event.clientX / s.clientWidth;

        pos = pos * 1.25 - 0.2;

        s.scrollLeft = pos * (s.scrollWidth - s.clientWidth);
    }

}
