import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  public inputString!: string;
  
  @Output()
  public onChange: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public placeholder!: string;

  public getInputValue(event: any): void {
    this.inputString = event.target.value;    
    this.onChange.emit(this.inputString)    
  }
  
}
