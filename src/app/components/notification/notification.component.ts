import {Component} from '@angular/core';
import {NotificationService} from "../../pages/notification-page/notification-service";

@Component({
  selector: 'ts-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  constructor(public notifyService: NotificationService) {
  }


}
