import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LazyLoadingService {

  public key: string = '44be32770cd546ccabbd5f7a834c22f5'

  public getData(url: string): Promise<any> {
    return new Promise((res, rej) => {
      try {
        fetch(`https://rawg.io/api/games?page=1&page_size=10&key=${this.key}`)
          .then(res => res.json())
          .then(data => {
            res(data.results)
          })
      } catch (e) {
        rej(e)
      }
    })
  }
}
