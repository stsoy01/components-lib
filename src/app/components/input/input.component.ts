import {Component, Input} from "@angular/core";
import {range} from "rxjs";

@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  @Input()
  public mask!: string;

  @Input()
  public innerText: string = 'example';

  public getTypedValue(event: any): void {
    this.innerText = event.target.innerText;
    console.log(event.target.innerText)
  }


  public setCursor(): void {
    let cursor = document.getElementById('tsInput');
    let range = document.createRange();
    range.setStart(cursor!.childNodes[0], 0)
    range.collapse(true);
    let sel = window.getSelection();
    sel!.removeAllRanges()
    sel!.addRange(range)
  }
}
