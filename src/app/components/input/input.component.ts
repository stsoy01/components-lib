import {Component, EventEmitter, Input, Output} from "@angular/core";
import * as e from "express";

type InputTypes = 'bank_card' | 'password' | 'email' | 'phone' | 'postal_code' | 'default'


@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  public inputString: string = '';
  public bankName: string = '';

  @Input()
  public mode: InputTypes = 'default';
  @Input()
  public placeholder!: string;
  @Input()
  public clear: boolean = false;
  @Output()
  public onChange: EventEmitter<any> = new EventEmitter<any>();

  // General Input Component methods
  /**
   * Getting input value
   * @param event
   */
  public getInputValue(event: any, type?: string): void {
    switch (event.target.value) {
      case '4':
        this.bankName = 'visa';
        break;
      case '5':
        this.bankName = 'mastercard';
        break;
      case '3':
        this.bankName = 'american_express';
        break;
      default:
        this.bankName = 'default';
        break;
    }

    if (type === 'bank_card') {
      event.target.value = event.target.value.replace(/\D/g, "");
      event.target.value = event.target.value.replace(/^(\d{12})(\d)/gm, "$1-$2");
      event.target.value = event.target.value.replace(/^(\d{8})(\d)/gm, "$1-$2");
      event.target.value = event.target.value.replace(/^(\d{4})(\d)/gm, "$1-$2");
      this.onChange.emit(event.target.value)
    } else {
      this.inputString = event.target.value;
      this.onChange.emit(this.inputString)
    }
    console.log(this.inputString)
  }

  /**
   *
   */
  public clearInoutString(): void {
    this.inputString = '';
  }


  // Input exceptions methods
  /**
   *
   * @param event
   * @returns
   */
  public blockSpace(event: any): void {
    if (event.keyCode == 32) {
      event.returnValue = false;
      return;
    }
  }

  /**
   *
   * @param event
   */
  public checkBankCardDigit(event: any): void {
    if (event.which === 8) {
      event.returnValue = true;
      return;
    } else if (event.which > 57 || this.inputString.length > 18) {
      event.returnValue = false;
      return;
    }

  }


  // Password button methods
  /**
   *
   */
  public showPassword(): void {
    const passwordField = document.getElementById('password_field');
    passwordField?.classList.add('showPassword');
  }

  /**
   *
   */
  public hidePassword(): void {
    const passwordField = document.getElementById('password_field');
    passwordField?.classList.remove('showPassword');
  }
}
