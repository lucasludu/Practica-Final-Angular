import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHeadline]'
})
// export class HeadlineDirective implements OnChanges {
export class HeadlineDirective {

  private _fontWeight = 'normal';

  @Input()
  // fontWeight = 'normal';
  get fontWeight() {
    return this._fontWeight;
  }


  set fontWeight(newValue: string) {
    console.log('Cambio el valor: ', newValue);

    this._fontWeight = newValue;

    this.render.setStyle(
      this.elementRef.nativeElement,
      'font-weight',
      this.fontWeight
    );
  }


  constructor(
    private elementRef: ElementRef,
    private render: Renderer2) {

    this.render.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      '20px'
    );
  }

  /*
    Es mas eficiente hacer con getter y setter ya que con el ngOnChanges puede
    consumir muchos recursos, si tenemos muchos @Input()
  */

  /*
  ngOnChanges(changes: SimpleChanges): void {
    this.fontWeight = changes['fontWeight']?.currentValue;
    this.setFontWeight();
  }
  
  setFontWeight(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'font-weight',
      this.fontWeight
      );
    }
    */

}

// DEJE EN EL MINUTO 36
