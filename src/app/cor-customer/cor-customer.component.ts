import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cor-customer',
  templateUrl: './cor-customer.component.html',
  styleUrls: ['./cor-customer.component.scss']
})
export class CorCustomerComponent implements AfterViewInit {
  displayedColumns: string[] = ['action', 'accStatus', 'checkStatus', 'completeStatus', 'accNo', 'name', 'maxLoan', 'unitCode', 'usedLoan', 'prioLoan', 'accType', 'area', 'country', 'birth', 'gender', 'telNo', 'email', 'address', 'idCardType', 'idCardNo', 'idCardIssuer', 'idCardValidDate', 'contractNo', 'openDate', 'closeDate', 'expiredDate', 'channel', 'introCustName', 'remarks', 'createdUserId', 'createdTime', 'updatedUserId', 'updatedTime'
  ];
  dataSource = new MatTableDataSource<customerList>();

  constructor() { }

  ngAfterViewInit(): void {

  }

}
export interface customerList {
  accStatus: number;

}
