import { inject, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastTemplateComponent } from "src/app/components/toast-template/toast-template.component";


@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private snackBar = inject(MatSnackBar);

    open(text) {
        let config: MatSnackBarConfig = {
            duration: 2000,
            panelClass: ["default"],
            data: { text },
        };

        this.snackBar.openFromComponent(ToastTemplateComponent, config);
    }

}
