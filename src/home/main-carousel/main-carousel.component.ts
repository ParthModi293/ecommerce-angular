import { Component } from '@angular/core';
import { homeCarouselData } from '../../Data/mainCarousel';

import { CommonModule } from '@angular/common';
import { sareePage1 } from '../../Data/Saree/page1';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {

  carouselData:any
  currentSlide=0;
  interval: any;

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
   
    

    this.carouselData=homeCarouselData;
    this.autoPlay();
  }

 autoPlay(){
 setInterval(()=>{
  this.nextSlide();
 },2000)
 }

 nextSlide(){
  this.currentSlide=(this.currentSlide+1) % this.carouselData.length;
 }

}
