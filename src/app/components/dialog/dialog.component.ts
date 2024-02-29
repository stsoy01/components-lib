import { Component, Input } from "@angular/core";
import { DialogService } from "./dialog.service";

@Component({
  selector: 'ts-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  @Input()
  public id!: string;

  constructor(public dialogService: DialogService) {
  }

  public closeDialog(): void {
    const dialogWindow = document.getElementById(`${this.dialogService.id}`)
    dialogWindow!.style.display = "none";
    this.dialogService.id = ''
  }

  public show(): void {
    console.log('2');
  }
}
