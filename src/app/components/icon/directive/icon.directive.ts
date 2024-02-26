import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[iconUrl]'
})

export class IconDirective implements OnInit {

  @Input()
  public url!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'background-image', `url(${this.url})`
    )
  }
}
