import { Inject, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { ApiBaseService } from './api-base.service';
import { RalItem } from '../models/RalItem';

@Injectable({
  providedIn: 'root'
})
export class RalService extends ApiBaseService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getRalList(): Promise<RalItem[]> {
    return this.get<RalItem[]>().toPromise();
  }

  getRalItemByCode(code: string): Promise<RalItem>{
    return this.get<RalItem>(`/GetRalItem/${code}`).toPromise();
  }
}
