import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-toast-template',
    templateUrl: './toast-template.component.html',
    styleUrl: './toast-template.component.scss',
    standalone: true,
    imports: []
})
export class ToastTemplateComponent implements OnInit {

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: any,
        public snackBarRef: MatSnackBarRef<ToastTemplateComponent>
    ) { }

    ngOnInit(): void { }

};
