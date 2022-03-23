import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: any = [];
  array: any = [];
  label: any = [];

  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < 100; ++i) this.array[i] = i;
    this.array = this.random_function(this.array);
    console.log('data ' + this.array);
    this.label_function();
    console.log('label ' + this.label);

    //show Chart data
    this.chart = new Chart('canvas', {
      type: "line",
      data: {
        datasets: [{
          data: this.array,
        }],
        labels: this.label
      },
    })
  }

  label_function() {
    for (var i = 1; i < 101; ++i) this.label[i] = i;
    // return this.label;
  }
  random_function(array: Array<number>) {
    var tmp, current, top = array.length;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
}