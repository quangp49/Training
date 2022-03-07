import { HttpClient } from '@angular/common/http';
import {
  LiveAnnouncer
} from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { AfterViewInit, Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { ServerHttpService } from './Services/server-http.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements AfterViewInit {

  constructor(private serverHttp: ServerHttpService, private _liveAnnouncer: LiveAnnouncer) { }

  public searchInput: string;
  displayedColumns: string[] = ['secCd', 'secType', 'secSName', 'secName', 'capitalValue', 'listedQty', 'foreignMaxQty', 'stockDividendRate', 'cashDividendRate', 'marketCd', 'tradingLot', 'parValue', 'maxRoom', 'status', 'remarks'];

  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    var subject = new Subject<string>();
    this.serverHttp.getProfile().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //Search

    })
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  secCd: string,
  // secType: string,
  // secSName: string,
  // secName: string,
  // capitalValue: number,
  // listedQty: number,
}

// const ELEMENT_DATA: PeriodicElement[] = []