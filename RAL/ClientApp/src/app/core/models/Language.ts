import { Injectable } from '@angular/core';

@Injectable()

export class Language {
  private language = "UA";

  constructor() { }

  public setLanguage(param: string) {
    this.language = param;
  }

  public getLanguage() {
    return this.language;
  }
}
