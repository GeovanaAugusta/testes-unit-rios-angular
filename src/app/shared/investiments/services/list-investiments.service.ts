import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Interface
import { InvestimentsI } from '../model/investiments';

@Injectable({
  providedIn: 'root',
})
export class ListInvestimentsService {
  private url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private http: HttpClient) {}

  public list(): Observable<Array<InvestimentsI>> {
    return this.http.get<Array<InvestimentsI>>(this.url).pipe(map((res) => res));
  }
}
