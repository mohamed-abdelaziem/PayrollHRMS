import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  imports: [],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.css',
})
export class MyRequestsComponent {

requestNavs : string = 'leave';
requsetForm :string = '';
isChecked : boolean = false;


@ViewChild('parent')
parent !: ElementRef;



showModel(whoIsActive : string){
this.requsetForm = whoIsActive;
this.parent.nativeElement.classList.add('hidden');
}


}
