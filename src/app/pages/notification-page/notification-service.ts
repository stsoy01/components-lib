import {Injectable} from "@angular/core";

type NotificationObject = {
  title?: string
  message?: string
}

type NotificationType = 'warning' | 'error' | 'success';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  public quotes: any = {
    0: 'Lyin on the couch watchin Sunday football. That greasy smell of a downtown hot dog. Fourth of July, family barbecues. The sound of a plane flyin overhead. Just one peaceful night... a clean conscience — all gone....',
    1: 'Listen to me — if I get in trouble down there, you make every shot count. Yeah?',
    2: 'And just so were clear about back there... It was either him or me.',
    3: 'I struggled for a long time with survivin. And you—No matter what, you keep finding something to fight for.',
    4: 'I guess no matter how hard you try, you can’t escape your past. Thank you.',
    5: 'You wanna know the best thing about my job? I don\'t gotta know why. Be honest with you, I could give two shits what you\'re up to.',
    6: 'Tommy saw the world one way, I saw the other.',
    7: 'You\'re treading on some mighty thin ice here.',
    8: 'They sacrifice the few to save the many.',
    9: 'You have no idea what loss is.',
    10: 'You\'re right. You\'re not my daughter- and I sure as hell ain\'t your dad. And we are going our separate ways.',
  }
  public title: string = '';
  public notifyList: any[] = [];
  public isHidden: boolean = false;


  public open({title, message}: NotificationObject): void {

    this.notifyList.push({title: this.quotes[`${Math.floor(Math.random() * 10)}`]})

    if (this.notifyList.length === 1) {
      this.isHidden = false;
    }


    // this.isHidden = true;
    setTimeout(() => {
      this.isHidden = true;
      this.notifyList.shift();
    }, 3000)


  }
}
