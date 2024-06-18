import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {OrerCardComponent } from "./orer-card/orer-card.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss',
    imports: [MatCheckboxModule, CommonModule, OrerCardComponent]
})
export class OrderComponent {

  orderFilter=[
    {value:"on_the_way",label:"On the Way"},
    {value:"delivered",label:"Delivered"},
    {value:"cancelled",label:"Cancelled"},
    {value:"returned",label:"Returned"}
  ]

  constructor(private route:Router){

  }

  orders=[[1,1], [1,1,1]]


  navigateToOrderDetails=(id:number)=>{

    this.route.navigate([`order/${id}`])

  }

}
