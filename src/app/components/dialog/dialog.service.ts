import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  public id!: string;

  public open(id: string): void {
    this.id = id
  }

}
