import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'John Doe';
  logout(): void {
    console.log('Logged out');
  }
}
