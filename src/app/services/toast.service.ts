import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastTemplateComponent } from "../components/toast-template/toast-template.component";


@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private snackBar: MatSnackBar) { }

    open(text) {
        let config: MatSnackBarConfig = {
            duration: 2000,
            panelClass: ["default"],
            data: { text },
        };

        this.snackBar.openFromComponent(ToastTemplateComponent, config);
    }

}
