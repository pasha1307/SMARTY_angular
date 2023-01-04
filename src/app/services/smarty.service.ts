import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SmartyService {
  // for smarty-angular-l2uh-ppk.vercel.app
  authKey = '147509187321264857';
  depKey = '147509187582985634';
  vtlKey='147509183892527932';
  localHostApi='147509187689926841';

  authId = `&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7`;
  authToken = '&auth-token=WHaV2mmPXCxtYedAtRr7';
  lookupUrl = 'https://us-street.api.smartystreets.com/street-address?key=' + this.vtlKey;
  // autoUrlORIGINAL = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=';
  // autoUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=';
  autoUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?key=' + this.vtlKey + '&search=';
  aptUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
  autoLookupUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?';
  autoLookupQuery = 'search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il';
  referer = '-H referer: http://localhost:4200';
  // refUrl = `${this.autoLookupUrl}${this.autoLookupQuery}&key=${this.depKey}`

  refUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?key=' + this.vtlKey + '&search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il\' -H \'referer: http://localhost:4200';
  // refUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?key=' + this.vtlKey + '&search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il';

  constructor(public http: HttpClient) {
  }

  getAddress(val: any) {
    const {street_line, secondary, city, state, zipcode} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    // const zp = zipcode.replace(/\s/g, '+') || null;
    // return this.http.get(`${this.lookupUrl}?street=${sl}+${cty}+${st}${this.authId}${this.authToken}`);
    return this.http.get(`${this.lookupUrl}&street=${sl}+${cty}+${st}`);
  }

  lookup() {
    // return this.http.get(`${this.refUrl}${this.authId}${this.authToken}`);
    // return this.http.get(`https://us-autocomplete-pro.api.smartystreets.com/lookup?
// key=147509187582985634`);
    return this.http.get(`${this.refUrl}`);
    // return this.http.get(`${this.refUrl}`);
  }

  ontest() {
    // return console.log(this.Lookup);
  }

  // autoStreet(term: string): any {
  //   // return this.http.get<any>(`${this.autoUrl}${term}${this.vtlKey}&source=all`)
  //   return this.http.get<any>(`${this.autoUrl}${term}&source=all`)
  //     .pipe(map(data => data.suggestions))
  // }
  autoStreet(term: string): any {
    return this.http.get<any>(`${this.autoUrl}${term}&source=all`)
        .pipe(map(data => data.suggestions))
  }

  // autoStreet_ORIGINAL(term: string): any {
  //   return this.http.get<any>(`${this.autoUrl}${term}${this.authId}${this.authToken}&source=all`)
  //       .pipe(map(data => data.suggestions))
  // }

  autoSecond(val: any) {
    const ws = "";
    const dws = " ";
    const qq = '?search=1042+W+Center+St+Apt+A&selected=1042+W+Center+St+Apt+A+(24)+Orem+UT+84057';

    const {street_line, secondary, city, state, zipcode, entries} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    const zp = zipcode.replace(/\s/g, '+');

    const qq1 = '?search=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode + '&selected=' + street_line + ws + secondary + " " + city + ", " + state + " " + zipcode;
    // return this.http.get<any>(this.aptUrl + '?search=' + sl + '&selected=' + sl + '+' + sc + '+' + '(' + entries + ')' + '+' + cty + '+' + st + '+' + zp + this.authId + this.authToken)
    return this.http.get<any>(this.aptUrl + '?search=' + '&key=' + this.vtlKey + sl + '&selected=' + sl + '+' + sc + '+' + '(' + entries + ')' + '+' + cty + '+' + st + '+' + zp )
  }

}
