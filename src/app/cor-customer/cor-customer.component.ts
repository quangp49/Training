import { Component, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cor-customer',
  templateUrl: './cor-customer.component.html',
  styleUrls: ['./cor-customer.component.scss']
})
export class CorCustomerComponent implements AfterViewInit {
  displayedColumns: string[] = [

  ]

  constructor() { }

  ngAfterViewInit(): void {
    
  }

}
