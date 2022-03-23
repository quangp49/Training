import { HttpClient } from '@angular/common/http';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { ServerHttpService } from '../Services/server-http.service';

/**
 * @title Table with pagination
 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  constructor(private serverHttp: ServerHttpService, private _liveAnnouncer: LiveAnnouncer) { }

  displayedColumns: string[] = ['secCd', 'secType', 'secSName', 'secName', 'capitalValue', 'listedQty', 'foreignMaxQty', 'stockDividendRate', 'cashDividendRate', 'marketCd', 'tradingLot', 'parValue', 'maxRoom', 'status', 'remarks'];

  dataSource = new MatTableDataSource<PeriodicElement>();
  clone: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.serverHttp.getTable().subscribe(data => {
      this.clone = data;
      this.convertType();
      this.dataSource = new MatTableDataSource(this.clone);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
  convertType() {
    for (var itemm of this.clone) {
      // secType
      if (itemm.secType === 1) {
        itemm.secType = "Cổ phiếu";
      }
      else if (itemm.secType === 3) {
        itemm.secType = "Trái phiếu";
      }
      else if (itemm.secType === 5) {
        itemm.secType = "Chứng quyền";
      }
      else {
        itemm.secType = "Null";
      }

      // marketCd
      if (itemm.marketCd === "100") {
        itemm.marketCd = "Sàn Hồ Chí Minh";
      }
      else if (itemm.marketCd === "200") {
        itemm.marketCd = "Sàn Hà Nội";
      }
      else if (itemm.marketCd === "300") {
        itemm.marketCd = "Sàn UpCom";
      }
      else {
        itemm.marketCd = "Null";
      }
    }
  }
}

export interface PeriodicElement {
  secCd: string;
  secType: number; // option
  secSName: string;
  secName: string;
  secClass: number;
  capitalValue: number;
  listedQty: number;
  foreignMaxQty: number;
  stockDividendRate: number
  cashDividendRate: number;
  marketCd: string;
  tradingLot: number;
  parValue: number;
  maxRoom: number;
  status: number;
  remarks: string;
}