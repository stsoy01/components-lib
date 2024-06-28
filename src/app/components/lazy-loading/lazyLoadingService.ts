import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LazyLoadingService {

  public getData(url: string): Promise<any> {
    return new Promise((res, rej) => {
      try {
        const data = fetch(url)
          .then(res => res.json())
        setTimeout(() => {
          res(data)
        }, 150)
      } catch (e) {

      }
    })


  }

}
