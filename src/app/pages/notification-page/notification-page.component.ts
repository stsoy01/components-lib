import { Component } from '@angular/core';

@Component({
  selector: 'notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationpageComponent {

  public selectedSwitchSection: string | number = 'Preview'

  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

}
