import { HttpClient } from "@angular/common/http";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatSort, Sort } from "@angular/material/sort";
import { AfterViewInit, Component, ViewChild, Inject } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";

import { ServerHttpService } from "../Services/server-http.service";
import { SysUnitDialogComponent } from "./sys-unit-dialog/sys-unit-dialog.component";

/**
 * @title Table with pagination
 */

@Component({
  selector: "app-sys-unit",
  templateUrl: "./sys-unit.component.html",
  styleUrls: ["./sys-unit.component.scss"],
})
export class SysUnitComponent implements AfterViewInit {

  constructor(
    private serverHttp: ServerHttpService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
  ) {
  }

  displayedColumns: string[] = [
    "select",
    "unitCode",
    "branchCode",
    "unitName",
    "unitSName",
    "address",
    "telNo",
    "faxNo",
    "email",
    "type",
    "status",
    "createdUserId",
    "createdTime",
    "updatedUserId",
    "updatedTime",
  ];

  dataSource = new MatTableDataSource<PeriodicElement>();
  clone: any;
  typeList: any;
  statusList: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.serverHttp.getUnit().subscribe(data => {
      this.clone = data.data;
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
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add_unit() {
    const dialogRef = this.dialog.open(SysUnitDialogComponent, {
      height: "600px",
      width: "600px",
      data: {
        action: 'add',
      },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getAllSysUnits();
    // });
  }

  edit_unit(row: any): void {
    const dialogRef = this.dialog.open(SysUnitDialogComponent, {
      height: "780px",
      width: "600px",
      data: {
        action: 'update',
        data: row,
      },
    });
  }

  delete_unit(row: any): void {
    const dialogRef = this.dialog.open(SysUnitDialogComponent, {
      height: '180px',
      width: '480px',
      data: {
        action: 'delete',
        data: row,
      }
    });
  }


  getType(type: any): any {
    if (typeof type === 'string') {
      for (const data of this.typeList) {
        if (data.value === type) {
          return data;
        }
      }
    } else {
      for (const data of this.typeList) {
        if (data.data === type) {
          return data;
        }
      }
    }
    return '';
  }

  getStatus(status: any): any {
    if (typeof status === 'string') {
      for (const data of this.statusList) {
        if (data.value === status) {
          return data;
        }
      }
    } else {
      for (const data of this.statusList) {
        if (data.data === status) {
          return data;
        }
      }
    }
    return '';
  }

  convertType() {
    for (var itemm of this.clone) {
      // type
      if (itemm.type === 1) {
        itemm.type = "Hội sở chính";
      }
      else if (itemm.type === 2) {
        itemm.type = "Đại lý";
      }
      else {
        itemm.type = "Null";
      }

      // status
      if (itemm.status === 1) {
        itemm.status = "Mở";
      }
      else if (itemm.status === 2) {
        itemm.status = "Đóng";
      }
      else {
        itemm.status = "Null";
      }
    }
  }
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
  remarks: string;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;
}