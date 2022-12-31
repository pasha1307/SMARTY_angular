import { Component } from '@angular/core';
import {Menu} from "../../helpers/side-menu.model";

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.scss']
})
export class MainShellComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Workbaskets',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Adjudication',
          icon: 'money',
          link: '/adjudication',
          color: '#ff7f0e',
        },
        {
          title: 'Intake',
          icon: 'people',
          color: '#ff7f0e',
          link: '/intake',
        },
      ],
    },
  ];
}
