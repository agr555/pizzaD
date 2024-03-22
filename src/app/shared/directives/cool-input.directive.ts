import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective {
  @Input() coolInputDefaultBgColor:string = 'white';
  @Input() coolInputFocusBgColor:string = 'orange';

  constructor(private el: ElementRef,// если описать как приват, то б свойство класса и доступ по  this.el
              private rend: Renderer2) {

    // console.log(el);
    // console.log(this.el);
  }
  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor(){
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus(){
    return this._isOnFocus;
  }

@HostListener('focus')
onFocus(){
  // this.rend.setStyle(this.el.nativeElement, 'background-color', 'orange');
  this.changeElementBgColor(this.coolInputFocusBgColor);
  this._isOnFocus = true;
}
  @HostListener('blur')
onBlur(){
  // this.rend.setStyle(this.el.nativeElement, 'background-color', 'white');
  this.changeElementBgColor(this.coolInputDefaultBgColor);
  this._isOnFocus = false;
}
// @HostListener('click', ['$event.target'])
//  onClick(target: HTMLElement){
//      console.log(target);
//    }
  @HostListener('click', ['$event', '$event.target'])

  onClick(event: Event, target: HTMLElement){
    console.log(event);
    console.log(target);
    console.log(target.getAttribute('placeholder'));
  }
  ngOnInit() {
    // console.log(this.el.nativeElement.innerText); // напр так исп
    // console.log(this.el);

    //меняем фон элемента 2 способами
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.rend.setStyle(this.el.nativeElement, 'background-color', 'yellow');

this.changeElementBgColor(this.coolInputDefaultBgColor);


    //добавляем к элементу *
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');
    /*
        // добавляем span  класс, что элемент обязателен для добавления
        const text = this.rend.createElement('span');
        this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
        this.rend.setStyle(text, 'color', 'red');
        //insertBefore вставить. родит this.el.nativeElement.parentElement, newChild = text. этот,
        // refChild перед чем вставить - взять текущий и найти следующий через nextSibling (от текущего = this.el.nativeElement)
        this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement))
        */
  }
  changeElementBgColor(color: string){
    // this.rend.setStyle(this.el.nativeElement, 'background-color', color);
    this._backgroundColor = color;
  }
}
