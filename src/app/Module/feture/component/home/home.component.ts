import { Component } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { manJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MainCarouselComponent, ProductSliderComponent]
})
export class HomeComponent {

    menJeans:any
    gouns:any
    sari:any

    ngOnInit(){
       
        this.menJeans=manJeans.slice(0,5)
        this.gouns=gounsPage1.slice(0,5)
        this.sari=lehngacholiPage2.slice(0,5)
    }

}
