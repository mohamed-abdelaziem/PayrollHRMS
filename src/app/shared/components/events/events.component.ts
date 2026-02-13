import {  Component , OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements  OnInit {
eventNav : string = 'traning';
dropDownIsShow  : boolean = false;


   ngOnInit(): void {
     initFlowbite();
    }


  




}
