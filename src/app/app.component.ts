import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fish-book-admin';
  constructor(private themeService: NbThemeService) {
    // this.themeService.changeTheme('material-dark');
  }
}
