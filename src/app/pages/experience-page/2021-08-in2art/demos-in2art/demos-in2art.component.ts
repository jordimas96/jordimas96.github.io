import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { IframeTemplateComponent } from './iframe-template/iframe-template.component';

@Component({
    selector: 'app-demos-in2art',
    templateUrl: './demos-in2art.component.html',
    styleUrl: './demos-in2art.component.scss',
    imports: [
        ...SharedImports
    ]
})
export class DemosIn2artComponent {

    constructor(
        public m: MainService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Deshabilitar control dels videos des de les tecles multimedia del teclat //
        // navigator.mediaSession.setActionHandler('play', function() { });
        // navigator.mediaSession.setActionHandler('pause', function() { });
    }

    afterRootFadeIn() { }


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
