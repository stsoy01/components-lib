import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  public inputString: string = '';

  @Input()
  public placeholder!: string;
  @Input()
  public clear: boolean = false;


  @Output()
  public onChange: EventEmitter<any> = new EventEmitter<any>();

  public getInputValue(event: any): void {
    this.inputString = event.target.value;
    this.onChange.emit(this.inputString)
  }

  public clearInoutString(): void {
    this.inputString = '';
  }

}
