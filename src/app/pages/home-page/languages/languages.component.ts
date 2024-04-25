import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends CardComponent {

    public showTime = false;
    public sorted = false;

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);

        this.showTime = Utils.getCookie("showTime") == "1";
    }
    override ngOnInit() {
        super.ngOnInit();
    }


    showExpTime_click() {
        this.showTime = !this.showTime;
        
        // Desordenem //
        if (!this.showTime) {
            this.sort_click(false);
        }

        // Scroll to the element //
        window.scrollTo({ top:
            document.getElementById("languages")!.offsetTop
            - (this.m.appbar.height() + (this.m.index.vistaMobil() ? this.m.index.index.nativeElement.offsetHeight : 10))
        });

        Utils.setCookieDays("showTime", this.showTime ? 1 : 0);
    }
    sort_click(sorted?) {
        if (sorted != undefined) this.sorted = sorted
        else this.sorted = !this.sorted;

        // Afegim o traiem l'estil order per a ordenar elements dins el flex //
        if (this.sorted) {
            $("app-skill").each((i, e) => {
                let order = this.m.exp.getSkill(e.getAttribute("n")).diesTotals || 0;
                e.style.order = -order + "";
            });
        } else {
            $("app-skill").css("order", "");
        }
    }

    obrirVeureMesSkills() {
        $("#divBotoVeureMes").slideUp();
        $(".skills-ocultes").slideDown();
    }

}
