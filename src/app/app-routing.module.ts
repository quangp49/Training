import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';
import { ChartComponent } from './chart/chart.component';
import { SysUnitComponent } from './sys-unit/sys-unit.component';
import { CorCustomerComponent } from './cor-customer/cor-customer.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'sys-unit', component: SysUnitComponent },
  { path: 'cor-customer', component: CorCustomerComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
