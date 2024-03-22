import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import {CartService} from "../../../services/cart.service";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   loggedState: boolean = false;

  constructor(public cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.isLoggedSubject.subscribe( (isLoggedIn: boolean ) => {
    this.authService.isLogged$.subscribe( (isLoggedIn: boolean ) => {
//подписались на событие
this.loggedState = isLoggedIn;
console.log('State has been changed: '+ isLoggedIn);
//other logic
    })
  }

  login() {
    this.authService.logIn();
  }
  logout() {
    this.authService.logOut();
  }

}
