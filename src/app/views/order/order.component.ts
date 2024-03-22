import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {CartService} from "../../shared/services/cart.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute,
              private productService: ProductService,
    private router: Router) { }
  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  pizzaSelection = '';
  ngOnInit(): void {
    /*   if(this.cartService.product){
        this.formValues.productTitle = this.cartService.product;
      } */

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    });
    /*     const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
        if (productParam) {
          this.formValues.productTitle = productParam;
        } */
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
    console.log('unsubscript: order')
  }
  createOrder(): void {
    if (!this.formValues.productTitle) {
      alert("Выберите сначала пиццу");
      return;
    }
    if (!this.formValues.address) {
      alert('Введите адрес.');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите номер телефона');
      return;
    }
    //ajax
    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle, // тк имя не совпадает
      address: this.formValues.address,
      phone: this.formValues.phone
    })
      .subscribe(
        {
          next: (response) => {
            if (response.success && !response.message) {
              alert('Спасибо за заказ!');
              this.formValues = {
                productTitle: '',
                address: '',
                phone: ''
              }
            } else {
              alert('Error!')
            }
            // тут нужно добавить не только next. но и error!!!
          },
          error: (error) => {
            this.router.navigate(['/'])
          }
        });
  }
}
