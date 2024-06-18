import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orer-card',
  standalone: true,
  imports: [],
  templateUrl: './orer-card.component.html',
  styleUrl: './orer-card.component.scss'
})
export class OrerCardComponent {

  constructor(private route:Router){

  }
  navigateToOrderDetails=(id:number)=>{

    this.route.navigate([`orders/${id}`])

  }

}
