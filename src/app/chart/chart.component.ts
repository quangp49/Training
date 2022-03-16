import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  // Array of different segments in chart
  lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Test A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Test B' }
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
