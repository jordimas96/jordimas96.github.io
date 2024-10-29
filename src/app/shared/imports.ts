import { CommonModule } from "@angular/common";
import { MatRipple } from "@angular/material/core";
import { MostrarAmbAnimacioDirective } from "src/app/directives/mostrar-amb-animacio.directive";
import { TargetBlankDirective } from "src/app/directives/target-blank.directive";
import { LinkComponent } from "src/app/components/link/link.component";


export const MaterialImports = [
    MatRipple
];

export const SharedImports = [
    CommonModule,
    MostrarAmbAnimacioDirective,
    TargetBlankDirective,
    LinkComponent,

    ...MaterialImports
];
