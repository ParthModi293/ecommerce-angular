import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  updateCartItem(num:Number)
  {
    console.log("num", num)
  }

  removeCartItem(){
    console.log("cart item removed")
  }

  @Input() showButton:any;

}
