import {Component, OnInit, HostListener} from "@angular/core";
import {LazyLoadingService} from "./lazyLoadingService";

@Component({
  selector: 'ts-lazy-loading',
  templateUrl: './lazy-loading.html',
  styleUrls: ['./lazy-loading.scss']
})

export class LazyLoading implements OnInit {
  public payloadInformation: any[] = [];

  constructor(private lazyLoadService: LazyLoadingService) {
  }

  @HostListener('scroll')
  public scrolling(e: any): void {
    console.log(e.target.scrollTop)

  }

  public ngOnInit() {
    this.onScroll().then()
  }

  public async onScroll(): Promise<void> {
    const lazy = await this.lazyLoadService.getData('../../../assets/lazyLoadingData.json')
    this.payloadInformation = lazy;
    console.log(this.payloadInformation)
  }

}
