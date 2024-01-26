import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'ts-elastic-container',
  templateUrl: './elastic-container.component.html',
  styleUrls: ['./elastic-container.component.scss']
})

export class ElasticContainerComponent implements OnInit {

  public isLess: boolean = true;

  @Input()
  public content: string = '';
  public contentData!: string;

  public ngOnInit(): void {
    this.contentData = this.content.substring(0,150)+'...'
  }


  public resizeString(): void {
    this.isLess = !this.isLess;
    switch (this.isLess) {
      case true:
        this.contentData = this.content.substring(0, 150)+'...';
        break;
      case false:
        this.contentData = this.content;
        break;
    }




  }
}
