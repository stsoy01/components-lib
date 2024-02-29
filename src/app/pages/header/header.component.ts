import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

  public theme!: any;

  public ngOnInit(): void {
    this.theme = localStorage.getItem('theme') ?? 'dark'
    document.body.setAttribute('theme', this.theme);
  }

  public switchColorTheme(): void {   
    switch (this.theme) {
      case 'dark':
        document.body.setAttribute('theme', 'light');
        this.theme = 'light';
        localStorage.setItem('theme', 'light');
        break;
      case 'light':
        document.body.setAttribute('theme', 'dark');
        this.theme = 'dark';
        localStorage.setItem('theme', 'dark');
        break;
    }
  }
}
