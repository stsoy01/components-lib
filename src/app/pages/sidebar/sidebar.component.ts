import { Component } from "@angular/core";



type SwitcCases = string;

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})

export class SidebarComponent {

  public eCData = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ';

  public section: SwitcCases = 'container';

  public switchSection: string | number = 'Preview';

 
  public switchDarkMode(): void {
    document.body.classList.toggle('dark-theme')
  }

  public selectSection(section: string): void {
    this.section = section;
  }

  public setButton(selectedValue: any): void {
    console.log(selectedValue)
  }

 

  public isHired(data: any): void {
    console.log(data);
  }

  public getSelectedSection(sectionValue: number | string): void {
    this.switchSection = sectionValue;
  }
}
