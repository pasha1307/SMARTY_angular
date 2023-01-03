import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-apl-adjudication',
  templateUrl: './apl-adjudication.component.html',
  styleUrls: ['./apl-adjudication.component.scss']
})
export class AplAdjudicationComponent implements OnInit {
constructor() {
}
ngOnInit() {
  console.log('NAV DATA in History', history.state)
}
}
