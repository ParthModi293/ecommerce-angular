import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ProductReviewCardComponent } from "./product-review-card/product-review-card.component";
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { manJeans } from '../../../../../Data/Men/men_jeans';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";
import { StarRatingComponent } from "../../../shared/star-rating/star-rating.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    imports: [MatRadioModule, FormsModule, MatButtonModule, ProductReviewCardComponent, CommonModule, MatProgressBarModule, ProductCardComponent, StarRatingComponent]
})
export class ProductDetailsComponent {

  selectedSize:any;
  reviews=[1,1,1,1];
  relatedProducts:any

  constructor(private router:Router){}
  
  ngOnInit() {
    this.relatedProducts=manJeans;
    
  }

  handleAddToCart(){
    console.log("selected Size", this.selectedSize)

    this.router.navigate(['cart'])
  }

}
