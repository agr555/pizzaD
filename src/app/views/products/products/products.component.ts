import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription, catchError, map, of, retry, tap } from 'rxjs';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,
    private http: HttpClient, private router: Router
    /*    private cartService: CartService,
       private router: Router */
  ) { }


  public products: ProductType[] = [];
  loading: boolean = false; //true;
  private subscription: Subscription | null = null;
  ngOnInit() {
    this.loading = true;
    this.subscription = this.productService.getProducts()
    .pipe (
      tap(() =>{
          this.loading = false;
      })
    )
      .subscribe(
        {
          next: (data) => {
          // this.loading = false;
            console.log(data);
            this.products = data;
          },
          error: (error) => {
              // this.loading = false;
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    console.log('unsubscript: products')
  }


  /*   addToCart(title: string): void {
      this.cartService.product = title;
      // this.router.navigate(['/order']); //передача через сервис
      // this.router.navigate(['/order', {product: title}]); //http://localhost:4200/order;product=КУРИНАЯ%20ДЕЛЮКС
      this.router.navigate(['/order'], {queryParams:{product: title}}); //http://localhost:4200/order?product=БЕКОН%20И%20СОСИСКИ
    } */

}
