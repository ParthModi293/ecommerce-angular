import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../shared/address-card/address-card.component";
import { CartItemComponent } from "../../../shared/cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.scss',
    imports: [AddressCardComponent, CartItemComponent,CommonModule,MatButtonModule,MatDividerModule,MatIconModule]
})
export class PaymentComponent {

  products=[1,1,1]

}
