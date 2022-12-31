import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {Menu} from "../../helpers/side-menu.model";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menu?: Menu = [];
}
