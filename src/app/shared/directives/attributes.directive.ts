import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttributesDirective implements OnInit {

  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) { 
    
    
  }

  @HostListener('mouseenter') onmouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onmouseLeave() {
    this.highlight(this.highlightColor || 'red');
  }

  ngOnInit() {
    console.log(this.highlightColor);
    this.el.nativeElement.style.color = this.highlightColor || "red";
  }

 
  
  highlight(color: string): any {
    this.el.nativeElement.style.color = color;
  }

}
