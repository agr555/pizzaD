import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent  {
@Input() data:string = ''  ;
  }
