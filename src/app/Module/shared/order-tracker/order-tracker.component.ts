import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [MatIconModule,CommonModule,MatDividerModule],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.scss'
})
export class OrderTrackerComponent {

  @Input() activeStep:any
  @Input() steps:any



}
