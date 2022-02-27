import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerHttpService } from './Services/server-http.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements OnInit {

  constructor(private serverHttp: ServerHttpService) { }

  displayedColumns: string[] = ['secCd', 'secType', 'secSName', 'secName', 'capitalValue', 'listedQty', 'foreignMaxQty', 'stockDividendRate', 'cashDividendRate', 'marketCd', 'tradingLot', 'parValue', 'maxRoom', 'status', 'remarks'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.serverHttp.getProfile().subscribe((data) => {
      console.log(data);
    })
  }
  
}

export interface PeriodicElement {
  // action: string,
  // secCd: string,
  // secType: string,
  // secSName: string,
  // secName: string,
  // capitalValue: number,
  // listedQty: number,
}

const ELEMENT_DATA: PeriodicElement[] = []