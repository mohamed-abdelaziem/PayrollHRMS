import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexAnnotations,
  ApexPlotOptions,
  ChartComponent,
} from 'ng-apexcharts';

@Component({
  selector: 'app-team-management-dashboard',
  imports: [ChartComponent],
  templateUrl: './team-management-dashboard.component.html',
  styleUrl: './team-management-dashboard.component.css',
})
export class TeamManagementDashboardComponent {
  chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: 360,
        toolbar: {
          show: true,
        },
      },

      series: [
        {
          name: 'present',
          data: [69, 50, 32, 82, 70, 99, 93, 38, 84, 94, 82, 87],
          color: '#C4B5FD',
        },
        {
          name: 'absent',
          data: [47, 21, 35, 42, 41, 15, 57, 40, 82, 52, 54, 63],
          color: '#7C3AED',
        },
        {
          name: 'late',
          data: [30, 21, 37, 20, 15, 15, 35, 40, 57, 20, 12, 0],
          color: '#EDE9FE',
        },
      ],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          distributed: false,
        },
      },

      dataLabels: {
        enabled: true,
        offsetY: 0,
        style: {
          fontSize: '10px',
          fontWeight: 600,
          colors: ['#0F0D11'], //
        },
      },

      xaxis: {
        categories: [
          'Dec 24',
          'Jan 25',
          'Feb 25',
          'March 25',
          'April 25',
          'May 25',
          'June 25',
          'Jul 25',
          'Aug 25',
          'Sept 25',
          'Oct 25',
          'Nov 25',
        ],
      },

      legend: {
        position: 'bottom',
      },
    };
  }
}
