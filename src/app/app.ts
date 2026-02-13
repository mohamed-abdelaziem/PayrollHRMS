/// <reference types="../../@types/jquery/" />
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('PayrollHRMS');


  ngOnInit(): void {
   initFlowbite();
  }
  
 ngAfterViewInit(): void {
    console.log('after view init')
   $(function(){
  $(".loader").fadeOut(2000,function(){
    $('.loading').slideUp(2000)
  })
});
  }


 

}
