import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { IframeTemplateComponent } from './iframe-template/iframe-template.component';

@Component({
    selector: 'jmp-demos',
    templateUrl: './demos.component.html',
    styleUrl: './demos.component.scss',
    imports: [
        ...SharedImports
    ]
})
export class DemosComponent {

    constructor(
        public m: MainService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        // Deshabilitar control dels videos des de les tecles multimedia del teclat //
        // navigator.mediaSession.setActionHandler('play', function() { });
        // navigator.mediaSession.setActionHandler('pause', function() { });
    }


    obrirModal(id) {

        this.dialog.open(
            IframeTemplateComponent,
            <MatDialogConfig>{
                data: { id },
                panelClass: 'iframe-modal',
                backdropClass: 'iframe-modal-backdrop',
                width: '100%',
                maxWidth: '100%',
                height: '100%',
                maxHeight: '100%',

            }
        );

    }



}
