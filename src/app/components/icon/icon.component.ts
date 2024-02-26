import { Component, Input, OnInit } from "@angular/core";

type IconSize = 's' | 'm' | 'l';

@Component({
  selector: 'ts-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit{

  @Input()
  public size: IconSize = 's'


  public ngOnInit(): void {  
  }

}
