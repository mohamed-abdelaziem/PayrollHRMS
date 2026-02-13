import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css',
})
export class AttendanceComponent {
attendNav : string = 'timesheet';
complaintsModelIsOpen !: boolean ;
}
