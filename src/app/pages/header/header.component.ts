import {Component} from "@angular/core";

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public theme!: any;

  public switchColorTheme(): void {
    const bodyTheme = document.body.getAttribute('theme')
    this.theme = bodyTheme;

    switch (bodyTheme) {
      case 'dark':
        document.body.setAttribute('theme', 'light');
        break;
      case 'light':
        document.body.setAttribute('theme', 'dark');
        break;
    }
  }
}
