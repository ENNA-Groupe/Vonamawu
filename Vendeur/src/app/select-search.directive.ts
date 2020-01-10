import { Directive, ElementRef } from '@angular/core';
declare const $: any;

@Directive({
  selector: '[appSelectSearch]'
})
export class SelectSearchDirective {

  constructor(private el: ElementRef) {
    $(this.el.nativeElement).select2( {
      placeholder: "Choisissez un produit",
      allowClear: true
      } );
   }

}
