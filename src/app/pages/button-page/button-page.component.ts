import { Component } from "@angular/core";

@Component({
  selector: 'button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})

export class ButtonpageComponent {
  public showMessage(message: string): void {
    alert(message)
  }

}
