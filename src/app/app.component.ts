import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Module/feture/component/home/home.component";
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from "./Module/shared/footer/footer.component";
import { NavbarComponent } from './Module/shared/navbar/navbar.component';
import { ProductsComponent } from "./Module/feture/component/products/products.component";
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './State/User/user.service';
import { AppState } from './Models/AppState';
import { Store, StoreModule, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { authReducer } from './State/Auth/auth.reducer';
import { SharedModule } from './Module/shared/shared.module';
import { FetureModule } from './Module/feture/feture.module';
import { AuthModule } from './Module/auth/auth.module';
import { AdminModule } from './Module/admin/admin.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, CommonModule, NavbarComponent, MatIconModule, FooterComponent, ProductsComponent, SharedModule, FetureModule,AuthModule,AdminModule]
})
export class AppComponent {
  title = 'ecommerce-angular';




  constructor(private route:Router, private dialog:MatDialog, private userService:UserService, private store:Store<AppState>, private http:HttpClient){

  }

  ngOnInit() {
    if(localStorage.getItem("jwt")) 
      this.userService.getUserProfile()
   
     this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
      this.userService.getUserProfile()
       
     })
     
   }
}
