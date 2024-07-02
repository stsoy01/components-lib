import { Component, OnInit, HostListener } from "@angular/core";
import { LazyLoadingService } from "./lazyLoadingService";

@Component({
  selector: 'ts-lazy-loading',
  templateUrl: './lazy-loading.html',
  styleUrls: ['./lazy-loading.scss']
})

export class LazyLoading implements OnInit {
  public payloadInformation: any[] = [];
  public pageNumber: number = 1;
  public isLoading: boolean = true;

  constructor(private lazyLoadService: LazyLoadingService) {
  }

  @HostListener('scroll', ['$event'])
  public scrolling(e: any): void {
    if(e.target.scrollTop+e.target.clientHeight>=e.target.scrollHeight) {
      this.onScroll(this.pageNumber++)
    }
  }

  public ngOnInit() {
    this.onScroll(this.pageNumber).then()
  }

  public async onScroll(pageNumber: number): Promise<void> {
    this.isLoading = true;
    const lazy = await this.lazyLoadService.getData(this.pageNumber)
    this.payloadInformation.push(lazy)
    this.isLoading = false;
  }

}
