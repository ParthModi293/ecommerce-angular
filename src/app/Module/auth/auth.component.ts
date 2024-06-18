import { Component } from '@angular/core';
import { SigninComponent } from "./signin/signin.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [SigninComponent,CommonModule]
})
export class AuthComponent {

  isLoggedIn=true;

  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

}
