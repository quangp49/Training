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
  selector: 'app-sys-unit',
  templateUrl: './sys-unit.component.html',
  styleUrls: ['./sys-unit.component.scss']
})
export class SysUnitComponent implements AfterViewInit {

  constructor(private serverHttp: ServerHttpService, private _liveAnnouncer: LiveAnnouncer) { }

  displayedColumns: string[] = ['unitCode', 'branchCode', 'unitName', 'unitSName', 'address', 'telNo', 'faxNo', 'email', 'type', 'status',  'createdUserId', 'createdTime', 'updatedUserId', 'updatedTime'];

  dataSource = new MatTableDataSource<PeriodicElement>();
  clone: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    // this.serverHttp.getTable().subscribe(data => {
    //   this.clone = data;
    //   this.convertType();
    //   this.dataSource = new MatTableDataSource(this.clone);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
    this.clone = [
      {
          "unitCode": "100",
          "branchCode": "100",
          "unitName": "Ngụy Như Kon Tum",
          "unitSName": "NNKT",
          "address": "46 Ngụy Như Kon Tum",
          "telNo": null,
          "faxNo": null,
          "email": null,
          "type": 1,
          "status": 1,
          "remarks": "INIT",
          "createdUserId": "SYSTEM",
          "createdTime": "2021-11-08T17:00:00.000+00:00",
          "updatedUserId": "SYSTEM",
          "updatedTime": "2021-11-08T17:00:00.000+00:00"
      },
      {
          "unitCode": "101",
          "branchCode": "100",
          "unitName": "Ninh Bình",
          "unitSName": "NB",
          "address": "NB",
          "telNo": "123",
          "faxNo": "123",
          "email": "123",
          "type": 9,
          "status": 9,
          "remarks": "Nhom4",
          "createdUserId": "Nhom4",
          "createdTime": "2022-03-11T06:21:44.330+00:00",
          "updatedUserId": "Nhom4",
          "updatedTime": "2022-03-11T06:25:14.803+00:00"
      },
      {
          "unitCode": "102",
          "branchCode": "100",
          "unitName": "Ninh Bình",
          "unitSName": "NB",
          "address": "NB",
          "telNo": "123",
          "faxNo": "123",
          "email": "123",
          "type": 1,
          "status": 1,
          "remarks": "Nhom4",
          "createdUserId": "Nhom4",
          "createdTime": "2022-03-11T07:07:49.353+00:00",
          "updatedUserId": "Nhom4",
          "updatedTime": "2022-03-14T07:12:59.337+00:00"
      },
  ]
  this.dataSource = new MatTableDataSource(this.clone);
  console.log(this.dataSource);
  
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
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
  // convertType() {
  //   for (var itemm of this.clone) {
  //     // secType
  //     if (itemm.secType === 1) {
  //       itemm.secType = "Cổ phiếu";
  //     }
  //     else if (itemm.secType === 3) {
  //       itemm.secType = "Trái phiếu";
  //     }
  //     else if (itemm.secType === 5) {
  //       itemm.secType = "Chứng quyền";
  //     }
  //     else {
  //       itemm.secType = "Null";
  //     }

  //     // marketCd
  //     if (itemm.marketCd === "100") {
  //       itemm.marketCd = "Sàn Hồ Chí Minh";
  //     }
  //     else if (itemm.marketCd === "200") {
  //       itemm.marketCd = "Sàn Hà Nội";
  //     }
  //     else if (itemm.marketCd === "300") {
  //       itemm.marketCd = "Sàn UpCom";
  //     }
  //     else {
  //       itemm.marketCd = "Null";
  //     }
  //   }
  // }
}

export interface PeriodicElement {
  unitCode: string;
  branchCode: string;
  unitName: string;
  unitSName: string;
  address: string;
  telNo: string;
  faxNo: string;
  email: string;
  type: number;
  status: number;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;
}

// const ELEMENT_DATA: PeriodicElement[] = []
