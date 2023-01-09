import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Language } from '../../core/models/Language';
import { RalItem } from '..//../core/models/RalItem';
import { RalService } from '..//../core/services/ral.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent {
  constructor(private ralService: RalService, private router: Router, private route: ActivatedRoute, private globalLanguage: Language) {

  }

  code = '';
  public language = "UA";
  item: RalItem | undefined;
  
  async ngOnInit() {
    this.route.params.subscribe((params: Params) => this.code = params['code']);
    this.ralService.getRalItemByCode(this.code).then(result => {
      this.item = result;
    })

    this.changeLanguage(this.globalLanguage.getLanguage());
  }

  async changeLanguage(lang: string) {
    this.language = lang;
    this.globalLanguage.setLanguage(lang);

    if (lang == "UA") {
      document.getElementById("en")?.classList.remove("flag-wrapper");
      document.getElementById("ua")?.classList.add("flag-wrapper");
    } else if (lang == "EN") {
      document.getElementById("en")?.classList.add("flag-wrapper");
      document.getElementById("ua")?.classList.remove("flag-wrapper");
    }
  }

  async redirectToMainPage() {
    this.router.navigate([""]);
  }
}
