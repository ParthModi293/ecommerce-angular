import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { Router } from '@angular/router';
import {MatDialog, MatDialogActions, MatDialogModule} from '@angular/material/dialog'
import { AuthComponent } from '../../auth/auth.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule, NavContentComponent,MatDialogActions,MatDialogModule]
})
export class NavbarComponent {

  currentSection:any
  isNavbarContentOpen:any

  constructor(private route:Router, private dialog:MatDialog){

  }

  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;

  }

  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }

  navigateTo(path:any){
this.route.navigate([path])
  }

    @HostListener('document:click',[`$event`])
    onDocumentClick(event:MouseEvent){
      const modalContainer = document.querySelector(".modal-container");
      const openButtons=document.querySelectorAll(".open-button");

      let clickInsideButton=false;

      openButtons.forEach((button:Element)=>{
        if(button.contains(event.target as Node)){
          clickInsideButton=true;
        }
      })

      if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
        this.closeNavbarContent();
      }
    }





    handleOpenLoginModal=()=>{
      this.dialog.open(AuthComponent,{
        width:"400px",
        disableClose:false
      })

    }




}
