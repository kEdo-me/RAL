import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from '../../core/models/Language';
import { RalItem } from '..//../core/models/RalItem';
import { RalService } from '..//../core/services/ral.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public ralItems: RalItem[] = [];

  public ralFilteredItems: RalItem[] = [];

  public language = "UA";

  constructor(private ralService: RalService, private router: Router, private globalLanguage: Language) {
  }
  async ngOnInit() {
    await this.ralService.getRalList().then(result => {
      this.ralItems = result;
      this.ralFilteredItems = result;
    });
    this.changeLanguage(this.globalLanguage.getLanguage());
  }

  async onTableBlockClicked(code: string) {
    this.router.navigate(["detailed-page", code]);
  }

  async onSearchChange(event: any) {
    var inputValue = event.target.value;
    this.ralFilteredItems = this.ralItems.filter(x => x.code.includes(inputValue));
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
}
