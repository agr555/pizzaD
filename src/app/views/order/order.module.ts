import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { TuiButtonModule } from '@taiga-ui/core';
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {PanelModule} from "primeng/panel";
import {RadioButtonModule} from "primeng/radiobutton";

@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    OrderRoutingModule,

    InputTextModule,
    FormsModule,
    InputTextModule,
    FormsModule,

    TuiButtonModule,

    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule

  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
