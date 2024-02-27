import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

type BankTypes = 'american_express' | 'visa' | 'mastercard' | 'default'

@Directive({
  selector: '[bankCard]'
})

export class IconDirective implements OnInit {

  @Input()
  public bankName: BankTypes | string = ''
  constructor(private elRef: ElementRef,
              private render: Renderer2) {
 }

 public ngOnInit(): void {
   if(this.bankName === 'visa') {
        this.render.setStyle(this.elRef.nativeElement, 'backgroundImage', ``)
   }
   
 }
}
