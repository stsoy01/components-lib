import {Component, EventEmitter, Input} from "@angular/core";


@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  public inputString!: string;
  public onChange: EventEmitter<any> = new EventEmitter();

  @Input()
  public placeholder!: string;

  public getInputValue(event: any): void {
    this.inputString = event.target.value;    
    this.onChange.emit(this.inputString)    
  }
  
}
