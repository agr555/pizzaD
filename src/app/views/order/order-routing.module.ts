import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../../core/auth/auth.guard";
import {OrderComponent} from "./order.component";

const routes: Routes = [
  // { path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  { path: '', component: OrderComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
