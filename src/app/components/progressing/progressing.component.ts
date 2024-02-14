import {Component} from "@angular/core";

@Component({
  selector: 'ts-progressing',
  templateUrl: './progressing.component.html',
  styleUrls: ['./progressing.component.scss']
})

export class ProgressingComponent {

  public show(event: any): void {
    const indicator = document.getElementById('indicator')
    // indicator!.style.left = `${event.offsetX}px`
    console.log(`${event.offsetX}px`)
    indicator!.style.left = `${event.offsetX}px`
  }


}
