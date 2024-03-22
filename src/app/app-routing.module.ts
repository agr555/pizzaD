import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [

  {
    path:'',
    component: LayoutComponent,
    children: [
      {path: '',loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'order',loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products',loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)}
    ],
  },

  // { path: 'pizzaDaaa', redirectTo: 'products'}, // redirect откуда/куда
  { path: '**', redirectTo: ''}, //404  или на главную
  // { path: '**', component: MainComponent}, //404  или на главную
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
