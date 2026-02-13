import { Component } from '@angular/core';


@Component({
  selector: 'app-my-attendance',
  imports: [],
  templateUrl: './my-attendance.component.html',
  styleUrl: './my-attendance.component.css',
})
export class MyAttendanceComponent {

attendNav : string = 'timesheet';
complaintsModelIsOpen : boolean = false;

}
