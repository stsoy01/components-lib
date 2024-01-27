import { Component } from "@angular/core";

@Component({
  selector: 'ts-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  public closeDialog(): void {
    const dialogWindow = document.getElementById('dialog')
    dialogWindow!.style.display = "none";
  }
}
