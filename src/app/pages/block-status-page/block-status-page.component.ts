import {Component} from "@angular/core";

@Component({
  selector: 'block-status-page',
  templateUrl: './block-status-page.component.html',
  styleUrls: ['./block-status-page.component.scss']
})

export class BlockstatuspageComponent {

  public selectedSwitchSection: string | number = 'Preview'
  public status!: string | unknown;
  public isLoading: boolean = false;

  public getSelectedSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

  public sendGetRequest(): void {
    this.isLoading = true
    console.log(this.isLoading)
    let data = new Promise(async (response, reject) => {
      let data = await fetch('https://api.github.com/users/xiaotian/repos');
      response(data.status)
      reject(data.status)
    })
    data
      .then((val) => setTimeout(() => {
        this.isLoading = false;
        this.status = val;
      }, 2000))
      .catch((val) => this.status = val)
  }
}
