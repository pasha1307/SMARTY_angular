import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'User Name';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
