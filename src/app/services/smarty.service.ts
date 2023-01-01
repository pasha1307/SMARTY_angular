import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

// import * as _ from 'smartystreets-javascript-sdk/index.js';
@Injectable({
  providedIn: 'root'
})
export class SmartyService {
  private authId = '&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7';
  private authToken = '&auth-token=WHaV2mmPXCxtYedAtRr7';
  lookupUrl = 'https://us-street.api.smartystreets.com/street-address';
  autoUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=';
  aptUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
  constructor(public http: HttpClient) {
  }
 get id() {
    return this.authId;
 }

  get tkn() {
    return this.authToken;
  }
  getAddress(val: any) {
    const {street_line, city, state} = val;
    const sl = street_line.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    return this.http.get(`${this.lookupUrl}?street=${sl}+${cty}+${st}${this.id}${this.tkn}`);
  }

  autoStreet(term: string): any {
    return this.http.get<any>(`${this.autoUrl}${term}${this.id}${this.tkn}&source=all`)
      .pipe(map(data => data.suggestions))
  }

  autoSecond(val: any) {
    const {street_line, secondary, city, state, zipcode, entries} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    const zp = zipcode.replace(/\s/g, '+');

    return this.http.get<any>(this.aptUrl + '?search=' + sl + '&selected=' + sl + '+' + sc + '+' + '(' + entries + ')' + '+' + cty + '+' + st + '+' + zp + this.id + this.tkn)
  }

}
