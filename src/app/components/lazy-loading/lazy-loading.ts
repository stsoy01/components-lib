import {Component} from "@angular/core";
import {LazyLoadingService} from "./lazyLoadingService";
import * as lazyData from '../../../assets/lazyLoadingData.json'

@Component({
  selector: 'ts-lazy-loading',
  templateUrl: './lazy-loading.html',
  styleUrls: ['./lazy-loading.scss']
})

export class LazyLoading {
  public payloadInformation: any[] = [];

  constructor(private lazyLoadService: LazyLoadingService) {
  }

  public async onScroll(data: any): Promise<void> {
    const lazy = await this.lazyLoadService.getData('../../../assets/lazyLoadingData.json')
    this.payloadInformation = lazy;
    console.log(this.payloadInformation)
  }

}
