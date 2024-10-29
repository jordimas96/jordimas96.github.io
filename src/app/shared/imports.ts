import { CommonModule } from "@angular/common";
import { MostrarAmbAnimacioDirective } from "src/app/directives/mostrar-amb-animacio.directive";
import { TargetBlankDirective } from "src/app/directives/target-blank.directive";
import { MatRipple } from "@angular/material/core";


export const MaterialImports = [
    MatRipple
];

export const SharedImports = [
    CommonModule,
    MostrarAmbAnimacioDirective,
    TargetBlankDirective,

    ...MaterialImports
];
