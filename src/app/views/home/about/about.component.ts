import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupFullComponent} from "../../../shared/components/popup-full/popup-full.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit , AfterViewInit{

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  @ViewChild(PopupFullComponent)
  private popupFullComponent!: PopupFullComponent;

  ngAfterViewInit(): void{
      this.popupFullComponent.open();

    // this.modalService.open(this.popup, {  }) // вместо контента popup

    const modalRef = this.modalService.open(PopupComponent)//сюда наш PopupComponent вместо NgbdModalContent);
    modalRef.componentInstance.data = 'About component. World';
  }
}
