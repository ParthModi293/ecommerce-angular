import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { AddressCardComponent } from "../../../../shared/address-card/address-card.component";
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-address-form',
    standalone: true,
    templateUrl: './address-form.component.html',
    styleUrl: './address-form.component.scss',
    imports: [CommonModule, MatDividerModule, AddressCardComponent,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatButtonModule]
})
export class AddressFormComponent {

  addresses=[1,1,1]
  myForm:FormGroup= this.formBuilder.group({

    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
     mobile:["",Validators.required]





  })

  constructor(private formBuilder:FormBuilder){

  }

  handleCreateOrder(item:any){

  }

  handleSubmit=()=>{
    const formValue= this.myForm.value
    console.log("Form data", formValue)
  
  }

 
}
