import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';






@Component({
  selector: 'app-home',
  imports: [ NgxChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{

   

 



annualLeave = [
  { name: 'Used', value: 4 },
  { name: 'Remaining', value: 17 }
];

scheme: Color = {
  name: 'myScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#DCD9DF' , '#834DC9']
};


}
