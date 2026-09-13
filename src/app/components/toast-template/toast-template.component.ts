import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'jmp-toast-template',
    templateUrl: './toast-template.component.html',
    styleUrl: './toast-template.component.scss',
    imports: []
})
export class ToastTemplateComponent {

    public data = inject(MAT_SNACK_BAR_DATA);
    public snackBarRef = inject(MatSnackBarRef<ToastTemplateComponent>);

}
