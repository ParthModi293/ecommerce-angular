import { Component,Input } from '@angular/core';
import { HomeProductCardComponent } from "../home-product-card/home-product-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-slider',
    standalone: true,
    templateUrl: './product-slider.component.html',
    styleUrl: './product-slider.component.scss',
    imports: [HomeProductCardComponent,CommonModule]
})
export class ProductSliderComponent {

  @Input() title:any
  @Input() products:any
}
