import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  @Input() changeTamplate:any 

  constructor(private formBuilder:FormBuilder, private store:Store, private authService:AuthService){}

  loginForm:FormGroup=this.formBuilder.group({

    email:['',[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(8)]]



  })

  submitFrom():void{

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      console.log("Login data", this.loginForm.value)
    }

  }



}
