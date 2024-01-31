import {Component, Input} from "@angular/core";

@Component({
  selector: 'ts-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})

export class TagComponent {

  @Input()
  public rounded: boolean = false;

  @Input()
  public closeBtn: boolean = false;
  @Input()
  public tagList: string[] = []

  public deleteTag(tag: string, index: number): void {
    this.tagList = this.tagList.filter((el: any) => this.tagList.indexOf(el) !== index)
  }

}
