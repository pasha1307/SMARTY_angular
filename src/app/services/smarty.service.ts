import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

// import * as _ from 'smartystreets-javascript-sdk/index.js';
@Injectable({
  providedIn: 'root'
})
export class SmartyService {
  authId = '&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7';
  authToken = '&auth-token=WHaV2mmPXCxtYedAtRr7';
  lookupUrl = 'https://us-street.api.smartystreets.com/street-address';
  autoUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=';
  aptUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
  myUrl = 'https://us-street.api.smartystreets.com/street-address\n' +
    '\t?street=123+main+Schenectady+NY\n' +
    '\t&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7&auth-token=WHaV2mmPXCxtYedAtRr7';

  // myUrl = 'https://us-street.api.smartystreets.com/street-address\n' +
  //   '\t?street=123+main+Schenectady+NY\n' +
  //   '\t&key=147509187321264857'


  constructor(public http: HttpClient) {
  }

  getAddress(val: any) {
    const {street_line, secondary, city, state, zipcode} = val;
    const sl = street_line.replace(/\s/g, '+');
    const sc = secondary.replace(/\s/g, '+');
    const cty = city.replace(/\s/g, '+');
    const st = state.replace(/\s/g, '+');
    // const zp = zipcode.replace(/\s/g, '+') || null;
    return this.http.get(`${this.lookupUrl}?street=${sl}+${cty}+${st}${this.authId}${this.authToken}`);
  }

  lookup() {
    return this.http.get(this.myUrl);
  }

  autoStreet(term: string): any {
    return this.http.get<any>(`${this.autoUrl}${term}${this.authId}${this.authToken}&source=all`)
      .pipe(map(data => data.suggestions))
  }

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
    return this.http.get<any>(this.aptUrl + '?search=' + sl + '&selected=' + sl + '+' + sc + '+' + '(' + entries + ')' + '+' + cty + '+' + st + '+' + zp + this.authId + this.authToken)
  }

}

const hh = 'search=M%20Apricot%20StApt%20Carrizo%20Springs%20TX%2078834&selected=M%20Apricot%20StApt%20Carrizo%20Springs%20TX%2078834'
// search=1042+W+Center&selected=1042+W+Center+St+Apt+(108)+Orem+UT+84057
//search=Park+Cir+Unit&selected=Park+Cir+Unit(4)+Aspen+CO+81611&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7&auth-token=WHaV2mmPXCxtYedAtRr7
// search=S+Adams+St&selected=S+Adams+St+Unit+Willowbrook+IL+60527
//lookup?search=Park+Cir+Unit+Aspen+CO+81611&selected=Park+Cir+Unit+Aspen+CO+81611&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7&auth-token=WHaV2mmPXCxtYedAtRr7

// const authUrl = 'https://us-street.api.smartystreets.com/street-address?street=200+Swanton+Winchester+MA&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7&auth-token=WHaV2mmPXCxtYedAtRr7';
// const authUrl = 'https://us-autocomplete-pro.api.smartystreets.com/lookup?search=123+mai&auth-id=6b6533ca-6c82-4050-7351-a8c9608d42e7&auth-token=WHaV2mmPXCxtYedAtRr7';
// return this.http.get<any>('https://us-autocomplete-pro.api.smartystreets.com/lookup?key=147509187321264857&search=123+mai&include_only_cities=chicago%2Cil&include_only_states=mi&prefer_states=il -H referer: http://localhost')

// return this.http.get<any>(authUrl)
// return this.http.get<any>(this.myUrl)
// const SmartyStreetsCore = _.core;
// const websiteKey = '147509187321264857'; // Your Website Key
// const Lookup = _.usAutocomplete.Lookup;
// const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey);
// const clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
// const client = clientBuilder.buildUsAutocompleteClient();
// const lookup = new Lookup(term);
// return client.send(lookup);

// https://us-street.api.smartystreets.com/street-address
//     ?street=123+main+Schenectady+NY
//   &auth-id=8d497be5-e211-4949-a18f-0bfd1d9970d3
// &auth-token=th4hargQiuyG7w7L7xfO

// ...lookup?search=1042+W+Center+St+Apt+A&selected=1042+W+Center+St+Apt+A+(24)+Orem+UT+84057
