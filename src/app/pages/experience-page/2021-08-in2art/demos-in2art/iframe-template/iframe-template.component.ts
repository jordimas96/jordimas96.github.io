import { AfterViewInit, Component, ElementRef, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-iframe-template',
    templateUrl: './iframe-template.component.html',
    styleUrl: './iframe-template.component.scss',
    imports: [
        ...SharedImports,
        MatDialogContent
    ]
})
export class IframeTemplateComponent implements OnInit, AfterViewInit {
    public data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<IframeTemplateComponent>);

    @ViewChild('contenidor') contenidor: ElementRef;
    @ViewChild('iframe') iframe: ElementRef;
    public direccioALimitar = "vertical";

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.recalcularDireccioFlex();
    }

    @HostListener('window:resize', ['$event'])
    recalcularDireccioFlex() {
        let ratio;

        if (this.data.id == 1) ratio = 2560 / 1440;
        if (this.data.id == 2) ratio = 1080 / 2050;
        if (this.data.id == 3) ratio = 1920 / 1080;

        let alturaEspaiIBoto = 16 * 2 + 80;

        if (this.contenidor.nativeElement.clientWidth / (this.contenidor.nativeElement.clientHeight - alturaEspaiIBoto) > ratio)
            this.direccioALimitar = "horitzontal";
        else
            this.direccioALimitar = "vertical";

    }

    fullscreen(event: Event) {
        event.stopPropagation();
        this.iframe.nativeElement.requestFullscreen();
    }
}
