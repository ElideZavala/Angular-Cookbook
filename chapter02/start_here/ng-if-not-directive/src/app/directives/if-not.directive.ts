import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appIfNot(value: boolean) {
    if (value === false) {
      // si value es false mostrara el contenido
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // si no lo limpiara el contenido dentro.
      this.viewContainerRef.clear();
    }
  }
}
