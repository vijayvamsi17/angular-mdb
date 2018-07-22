import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCstdir]'
})
export class StructuralDirective {

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { 
    console.log(container); 
    console.log(template); 
  }

    @Input() set appCstdir(isHidden: boolean) {
    if(!isHidden) {
      this.container.createEmbeddedView(this.template);
    }else if(isHidden) {

    }
  }
}
