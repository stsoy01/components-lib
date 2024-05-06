import {Component} from '@angular/core';
import {NotificationService} from "./notification-service";

@Component({
  selector: 'notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationpageComponent {
  constructor(private notify: NotificationService) {
  }

  public selectedSwitchSection: string | number = 'Preview'

  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

  public showNotification(): void {
   this.notify.open({title: 'some title', message: 'some message'})
    console.log(this.notify.notifyList.length)
  }

}
