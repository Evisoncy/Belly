import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartComponent } from './cart/cart.component';
import { HeaderCartComponent } from './cart/header-cart/header-cart.component';
import { ContentCartComponent } from './cart/content-cart/content-cart.component';


@NgModule({
  declarations: [CartComponent, HeaderCartComponent, ContentCartComponent],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
