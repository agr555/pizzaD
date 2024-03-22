import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {ProductType} from "../../../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
  providers: [CartProductService]
})
// export class ProductCardComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class ProductCardComponent{

  // @Input() product!: ProductType;// оператор ненулевого утверждения вместо инициализации
  //   @Input() product: ProductType = {} as ProductType;// норм, но все же нужно следить, чтоб был объект подан

  // 3 вариант
  @Input() product: ProductType; //работает только вместе с инициализацией this.product = {image: '',..} //THE BEST
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>();//<ProductType> 21:02

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent; // инициализация через оператор ненулевого утверждения: не null  и не undefined, но помнить, что нужно исп, чтобы не было ошибки runtime
@ViewChild('elem')
private elem!: ElementRef;
  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
/* //4 вариант с getter -setter
  @Input()
  get product(): ProductType {return this._product;}
  set product(param: ProductType){
    param.title = param.title.toUpperCase();
    this._product = param;
  }
  private _product: ProductType;
@Output() addToCardEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();//<ProductType> 21:02
  constructor() {
    this._product = {
      image: '',
      title: '',
      description: ''
    }

    ngOnInit(): void {
  }
  addProductToCart(){
    this.addToCardEvent.emit(this.product);
  }
}
  }*/

/*  ngOnInit(): void {
    console.log('ngOnInit', ) // !после ngOnChanges!!! Правильнее сделать1 раз 8 запросов, а не в кажд продукте
  }*/
  /*ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
  }
  ngDoCheck() {
    console.log('ngDoCheck', ) // !после ngOnChanges!!! Правильнее сделать1 раз 8 запросов, а не в кажд продукте
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', ) // !после ngOnChanges!!! Правильнее сделать1 раз 8 запросов, а не в кажд продукте
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit ', this.elem); // дочерний элемент уже отрисован и существует
  };
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked ');
  };
  ngOnDestroy(){
    console.log('ngOnDestroy ');
  };*/
/*   addProductToCart(){
    this.cartProductService.count++;
    this.addToCardEvent.emit(this.titleComponent.title);
  } */
}
