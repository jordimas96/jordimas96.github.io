import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    standalone: true,
    imports: []
})
export class LinkComponent {

    @Input() href: string;
    @Input() target: string = "_blank";

    @Input() class: string;

};
