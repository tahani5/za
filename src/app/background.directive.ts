import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input() correctAnswer:boolean=false;
  constructor(private e1Ref: ElementRef , private renderer:Renderer2) { }
  @HostListener('click') onAnswered(){
    if (this.correctAnswer)
      this.renderer.setStyle(this.e1Ref.nativeElement, 'background-color', '#81c784');
    else
    this.renderer.setStyle(this.e1Ref.nativeElement, 'background-color', '#ef5350 ');

  }
}
