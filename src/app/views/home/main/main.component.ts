import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Observable, Subject, Subscription, from, map, observable } from 'rxjs';
import {CartService} from "../../../shared/services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {PopupFullComponent} from "../../../shared/components/popup-full/popup-full.component";
import {environment} from "../../../../environments/environment";
// declare var bootstrap: any;
// import * as bootstrap from "bootstrap";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy,AfterViewInit {

  //private observable: Observable<number>;
  private subject:Subject<number>;
  // private promise: Promise<string>

  constructor(public cartService: CartService, private modalService: NgbModal) {

    this.subject = new Subject<number>();

    let count = 100;
    const interval1 =  setInterval(() => {
       this.subject.next(count++);
     }, 1000);

     const timeout1 = setTimeout(() => {
      this.subject.complete()
     }, 6000);


    // this.observable = from([1,2,3,4,5])
    //создание observable
/*     this.observable = new Observable(observer => {
      let count = 0;
     const interval1 =  setInterval(() => {
        // observer.next(' Hello from observable! ')
        observer.next(count++);
      }, 1000);

      const timeout1 = setTimeout(() => {
        observer.complete() // подписка завершена и больше не подписаны
      }, 4000);

      const timeout2 = setTimeout(() => {
        observer.error(' error observable only! ') // подписка завершена и больше не подписаны
      }, 8000);

      return {
        unsubscribe(){
          clearInterval(interval1);
          clearInterval(timeout1);
          clearInterval(timeout2);

        }
      }
    }); */
  }
  // this.promise = new Promise<string>(resolve => {
  //   setTimeout(() => {
  //     resolve(' Hello, I am promise! ')
  //   }, 2000);
  // });
  private subscription:  Subscription | null = null;
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  ngOnInit() {
    console.log(environment.production);
    // this.modalService.open(content, {  })
   // const myModalAlternative = new bootstrap.Modal('#myModal', {});
   //  const myModalAlternative = new bootstrap.Modal('#myModal', {})
   // myModalAlternative.show();
    //здесь подписка
    // this.subscription = this.observable.subscribe(
    this.subscription = this.subject.subscribe(
      {
        next: (param: number) => {
       //   console.log('subscriber1: ', param);
        },
        error: (error: string) => {
        //  console.log('ERROR!' + error);
        }
      }
    );
  }
  @ViewChild(PopupFullComponent)
  private popupFullComponent!: PopupFullComponent;

  ngAfterViewInit(): void{
    this.popupFullComponent.open();
    this.modalService.open(this.popup, {  }) // вместо контента popup
    const modalRef = this.modalService.open(PopupComponent)//сюда наш PopupComponent вместо NgbdModalContent);
    modalRef.componentInstance.data = 'Main component. World';



  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test() {
    // this.observable
    this.subject
    .pipe(
      map (number => {
        // return number * 10;
        return 'число: '+ number;

      })
    )

    .subscribe((param: string) => {
    //  console.log('subscriber2: ', param);
    });
  }
  testPopup(popup: TemplateRef<ElementRef> ) {
    this.modalService.open(popup, {  }) // вместо контента popup
    // this.observable
    this.subject
      .pipe(
        map (number => {
          // return number * 10;
          return 'число: '+ number;

        })
      )

      .subscribe((param: string) => {
    //    console.log('subscriber2: ', param);
      });
  }
}
