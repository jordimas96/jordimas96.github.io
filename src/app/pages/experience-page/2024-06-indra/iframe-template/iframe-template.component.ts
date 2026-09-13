import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-iframe-template',
    templateUrl: './iframe-template.component.html',
    styleUrl: './iframe-template.component.scss',
    imports: [
        ...SharedImports,
        MatDialogContent
    ]
})
export class IframeTemplateComponent {

    public data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<IframeTemplateComponent>);

}
