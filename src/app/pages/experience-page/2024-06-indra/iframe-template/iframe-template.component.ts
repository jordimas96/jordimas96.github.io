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

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
    }
}
