import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector:'[appcustom]'
})

export class CustomDirective{

  constructor(private tempref: TemplateRef<any>,
              private viewref: ViewContainerRef){}
   
  // Input because you want that value to be exported here and set because so that you can equal that value here
  @Input() set appcustom(condition: boolean){
    if(condition){
      this.viewref.createEmbeddedView(this.tempref);
    }else{
      this.viewref.clear();
    }
  }              

}