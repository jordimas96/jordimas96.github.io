import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MostrarAmbAnimacioDirective,
        SkillComponent,
    ]
})
export class LanguagesComponent {
    Skills = Skills;

    public showTime = false;
    public sorted = false;

    constructor(
        public m: MainService,
        public exp: ExperienceCalculatorService
    ) {
        this.showTime = Utils.getCookie("showTime") == "1";
    }


    showExpTime_click() {
        this.showTime = !this.showTime;

        // Desordenem //
        if (!this.showTime) {
            this.sort_click(false);
        }

        // Scroll to the element //
        window.scrollTo({
            top:
                document.getElementById("languages")!.offsetTop
                - (this.m.appbar.height() + (this.m.index.vistaMobil() ? this.m.index.index.nativeElement.offsetHeight : 10))
        });

        Utils.setCookieDays("showTime", this.showTime ? 1 : 0);
    }
    async sort_click(sorted?) {
        if (sorted != undefined) this.sorted = sorted
        else this.sorted = !this.sorted;

        // Enviem els divs molt lluny i els fem tornar per a llançar l'efecte de appMostrarAmbAnimacio //
        $("app-skill").css({ "transform": "translateY(-100000px)" });
        await Utils.wait(10);

        // Afegim o traiem l'estil order per a ordenar elements dins el flex //
        if (this.sorted) {
            $("app-skill").each((i, e) => {
                let order = this.exp.getSkill(e.getAttribute("ng-reflect-nom"))?.diesTotals || 0;
                e.style.order = -order + "";
            });
        } else {
            $("app-skill").css("order", "");
        }

        await Utils.wait(10);
        $("app-skill").css({ "transform": "" });

    }

    obrirVeureMesSkills() {
        $("#divBotoVeureMes").slideUp();
        $(".skills-ocultes").slideDown();
    }

}
