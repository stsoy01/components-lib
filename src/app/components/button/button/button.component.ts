import {Component, Input} from "@angular/core";

type appearanceType = 'primary' | 'secondary' | 'accent' | 'outline' | 'flat'

@Component({
  selector: 'ts-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input()
  public appearance: appearanceType = 'outline';

  @Input()
  public disabled: true | false = false;

  @Input()
  public size: 'm' | 'l' | 's' = 's'

  @Input()
  public icon: string = ''

}
