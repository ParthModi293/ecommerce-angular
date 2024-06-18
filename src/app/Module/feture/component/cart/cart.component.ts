import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from "../../../shared/cart-item/cart-item.component";
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [CommonModule, CartItemComponent,MatDividerModule,MatButtonModule]
})
export class CartComponent {

  cart=[1,1,1]

  constructor(private route:Router){}

  navigateToCheckout(){
    this.route.navigate(["checkout"])

  }

}
