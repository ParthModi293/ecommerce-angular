import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigation } from './nav-content';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {

  category:any
 @Input() selectedSection:any

 ngOnInit() {
  
  this.category=navigation;

  console.log("selected section ", this.selectedSection)
  
 }

}
