import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  links = ['Intake', 'Adjudication/IR', 'Hearing', 'Effectuation/Closure'];
  activeLink = this.links[0];
  // background: ThemePalette = 'primary';
  background: ThemePalette = 'primary';
  apl?: any;
  isIntake?: boolean;
  isAdjud?: boolean;
  isHear?: boolean;
  isEffect?: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
ngOnInit() {
    // @ts-ignore
  this.isIntake = this.router.url.includes('intake');
  this.isAdjud = this.router.url.includes('adjudication');
  this.isHear = this.router.url.includes('hearing');
  this.isEffect = this.router.url.includes('closure');
  if (history.state.data) {
    this.apl = history.state.data
    console.log('extras', history.state.data)
  }
console.log('URL', this.router.url)
  // this.router.getCurrentNavigation().extras.state
  // console.log('PATH', this.route.pathFromRoot)
  //   console.log('SNAP', this.route.snapshot.paramMap)
  //
  //   this.route.queryParamMap.subscribe(p => {
  //     console.log('Map Params', p);
  //   })
}

  toggleBackground() {
    this.background = this.background ? 'accent' : undefined;
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
