import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup-full',
  templateUrl: './popup-full.component.html',
})
export class PopupFullComponent  {

  @ViewChild('popupFull')
  popupFull!: TemplateRef<ElementRef>;

  @Input() data:string = ''  ;

  constructor(private modalService: NgbModal) {
  }

  open(): void {
    this.modalService.open(this.popupFull);
  }



}
