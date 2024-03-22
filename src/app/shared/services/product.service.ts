import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  //  private products: ProductType[] = [
  //   {
  //     id: 0,
  //     image: 'product2.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили,ананасы',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  //   { id: 1,
  //     image: '',/*product3.png',*/
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2024-03-05 15:07:00'
  //   },
  //   { id: 2,
  //     image: 'product4.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2024-01-31 22:07:00'
  //   },
  //   { id: 3,
  //     image: 'product5.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  //   { id: 4,
  //     image: 'product6.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  //   { id: 5,
  //     image: 'product7.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  //   { id: 6,
  //     image: 'product8.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  //   { id: 7,
  //     image: 'product9.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2023-12-31 15:07:00'
  //   },
  // ];

  constructor(private http: HttpClient) { }
  private products: ProductType[] = [];
  getProducts(): Observable<ProductType[]> {
    // let params = new HttpParams();
    // params = params.set ('extraField',1)
    // return  this.products;
    // return this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1')
    // return this.http.get<{ data: ProductType[] }>('https://testologia.site/pizzas?extraField=1', {observe: 'response'})
    // return this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1', {responseType: 'text'})

    // return this.http.get<{ data: ProductType[] }>('https://testologia.site/pizzas', {
    //   headers: new HttpHeaders({
    //     Autorization: 'auth-token'
    //   }),
    //   params: params
    // })
    // .pipe(
    //   tap(result  => {
    //     console.log(result);
    //   }),
    //   map((result) => (result.data)),
    //   // map((result) => (result.body!.data)),
    //   // map((result) => (result.body ? result.body.data : [] )),
    // )
    // return this.http.get<ProductType[]>('https://testologia.site/pizzas');
    return this.http.get<ProductType[]>(environment.apiURL+ 'pizzas');
  }
  getProduct(id: number): Observable<ProductType> {
    // return  this.products.find(item => (item.id === id));
    // return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`);
    return this.http.get<ProductType>(environment.apiURL+ `pizzas?id=${id}`);
  }
  //создание заказа следует вынести в отдельный сервис!
  createOrder(data: { product: string, address: string, phone: string }) {
    // return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-pizza`, data);
    return this.http.post<{ success: boolean, message?: string }>(environment.apiURL+ `order-pizza`, data);
  }
}
