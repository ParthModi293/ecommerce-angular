import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, CommonModule, NavbarComponent, MatIconModule, FooterComponent]
})
export class AppComponent {
  title = 'ecommerce-angular';
}
