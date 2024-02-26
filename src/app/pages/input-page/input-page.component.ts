import { Component } from "@angular/core";
@Component({
  selector: 'input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})

export class InputpageComponent {

  public url: string = './directive/probe.png'
  public selectedSection: string | number = 'Preview';


  public selectedSwitchSection(section: string | number): void {
    this.selectedSection = section;
  }

  public getDefaultValue(data: any): void {
    console.log('default', data);
  }

  public getPinCode(data: any): void {
    console.log('pin_code', data);
  }

  public getBankCardNumber(data: any): void {
    console.log('bank-card:', data);
    
  }


  public readFile(): void {

  }


}
