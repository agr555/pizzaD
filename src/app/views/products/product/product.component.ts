import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterConfigOptions } from '@angular/router';
import { Subscription } from 'rxjs';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
  private subscription: Subscription | null = null;
  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          });
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    console.log('unsubscript: product')
  }

}
