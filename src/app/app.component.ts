import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Module/feture/component/home/home.component";
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from "./Module/shared/footer/footer.component";
import { NavbarComponent } from './Module/shared/navbar/navbar.component';
import { ProductsComponent } from "./Module/feture/component/products/products.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, CommonModule, NavbarComponent, MatIconModule, FooterComponent, ProductsComponent]
})
export class AppComponent {
  title = 'ecommerce-angular';
}
